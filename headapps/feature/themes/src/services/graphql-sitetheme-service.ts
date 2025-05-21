import { 
  GraphQLClient,
  CacheClient, 
  CacheOptions, 
  MemoryCacheClient,
  GraphQLRequestClientFactory 
} from '@sitecore-content-sdk/core';

import { FetchOptions } from '@sitecore-content-sdk/core/client';
import { ThemeInfo } from '../models/ThemeInfo'
         
const siteQuery = /* GraphQL */ `
  fragment SiteThemeInfo on Item {
    siteName: parent {
      parent {
        name
      }
    }
    theme: field(name: "Theme") {
      ... on LookupField {
        targetItem {
          themeName: field(name: "ThemeName") {
            value
          }
        }
      }
    }
  }

  query {
    search(
      where: {
        AND: [
          {
            name: "_templates"
            value: "{F5A83A0E-5EAB-441D-83A6-1357E4C8D03B}"
            operator: CONTAINS
          },
          {
            name: "_path"
            value: "{0DE95AE4-41AB-4D01-9EB0-67441B7C2450}"
            operator: EQ
          }
        ]
      }
      first: 50
    ) {
      results {
        ...SiteThemeInfo
      }
    }
  }
`;

export type GraphQLThemeInfoServiceConfig = CacheOptions & {
  /**
   * common variable for all GraphQL queries
   * it will be used for every type of query to regulate result batch size
   * Optional. How many result items to fetch in each GraphQL call. This is needed for pagination.
   * @default 10
   */
  pageSize?: number;
  /**
   * A GraphQL Request Client Factory is a function that accepts configuration and returns an instance of a GraphQLRequestClient.
   * This factory function is used to create and configure GraphQL clients for making GraphQL API requests.
   */
  clientFactory: GraphQLRequestClientFactory;
};

// Updated response type to match the new query structure
type GraphQLSiteInfoResponse = {
  search: {
    results: Array<{
      siteName: {
        parent: {
          name: string;
        };
      };
      theme: {
        targetItem: {
          themeName: {
            value: string;
          };
        };
      };
    }>;
  };
};

export class GraphQLThemeInfoService {
  private graphQLClient: GraphQLClient;
  private cache: CacheClient<ThemeInfo[]>;

  /**
   * Creates an instance of graphQL service to retrieve site configuration list from Sitecore
   * @param {GraphQLThemeInfoServiceConfig} config instance
   */
  constructor(private config: GraphQLThemeInfoServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.cache = this.getCacheClient();
  }

  /**
   * site query is available on XM Cloud and XP 10.4+
   */
  protected get siteQuery(): string {
    return siteQuery;
  }

  async fetchThemeInfo(fetchOptions?: FetchOptions): Promise<ThemeInfo[]> {
    const cachedResult = this.cache.getCacheValue(this.getCacheKey());
    if (cachedResult) {
      return cachedResult;
    }
    if (process.env.SITECORE) {
      return [];
    }

    const response = await this.graphQLClient.request<GraphQLSiteInfoResponse>(
      this.siteQuery,
      {},
      fetchOptions
    );

    // Updated processing logic to handle the new response structure
    const results = response?.search?.results?.reduce<ThemeInfo[]>((result, current) => {
      const siteName = current.siteName?.parent?.name;
      const themeName = current.theme?.targetItem?.themeName?.value;
      
      if (siteName && siteName !== 'website') {
        result.push({
          name: siteName,
          theme: themeName ?? 'base',
        });
      }

      return result;
    }, []) || [];

    this.cache.setCacheValue(this.getCacheKey(), results);
    return results;
  }

  /**
   * Gets cache client implementation
   * Override this method if custom cache needs to be used
   * @returns CacheClient instance
   */
  protected getCacheClient(): CacheClient<ThemeInfo[]> {
    return new MemoryCacheClient<ThemeInfo[]>({
      cacheEnabled: this.config.cacheEnabled ?? true,
      cacheTimeout: this.config.cacheTimeout ?? 10,
    });
  }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */
  protected getGraphQLClient(): GraphQLClient {
    if (!this.config.clientFactory) {
      throw new Error('clientFactory needs to be provided when initializing GraphQL client.');
    }

    return this.config.clientFactory({});
  }

  private getCacheKey(): string {
    return 'themeinfo-service-cache';
  }
}