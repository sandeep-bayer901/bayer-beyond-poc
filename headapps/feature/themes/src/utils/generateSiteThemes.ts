import path from 'path';
import chalk from 'chalk';
import * as fs from 'fs';

import { GraphQLThemeInfoService } from '../services/graphql-sitetheme-service';
import { createGraphQLClientFactory } from '@sitecore-content-sdk/core/client';
import { SitecoreConfig } from '@sitecore-content-sdk/core/config';
import { ThemeInfo } from '../models/ThemeInfo';
const DEFAULT_SITES_DIST_PATH = '.sitecore/themes.json';

/**
 * Configuration object for generating sites.
 */
export type GenerateSitesConfig = {
  /**
   * The Sitecore configuration used at build and run time.
   */
  scConfig: SitecoreConfig;

  /**
   * Optional path where the generated sites will be saved.
   * If not provided, the default '.sitecore/sites.json' will be used.
   */
  destinationPath?: string;
};

/**
 * Generates site information and writes it to a specified destination path.
 * @param {GenerateSitesConfig} config - The configuration for generating site info.
 * @param {GraphQLThemeInfoService} config.scConfig - The Sitecore configuration used at build and run time.
 * @param {string} config.destinationPath - The optional path where the generated sites file will be written. Defaults to '.sitecore/sites.json'.
 * @returns {Promise<Function>} - A promise that resolves to an asynchronous function that fetches site information and writes it to a file.
 */
export const generateSiteThemes = ({
  scConfig,
  destinationPath,
}: GenerateSitesConfig): (() => Promise<void>) => {
  return async () => {
    let sites: ThemeInfo[] = [];
    const sitesFilePath = path.resolve(destinationPath ?? DEFAULT_SITES_DIST_PATH);

    if (scConfig.multisite.enabled) {
      try {
        const siteInfoService = new GraphQLThemeInfoService({
          clientFactory: createGraphQLClientFactory({
            api: scConfig.api,
            retries: scConfig.retries.count,
            retryStrategy: scConfig.retries.retryStrategy,
          }),
        });

        console.log('Fetching themes information');
        sites = await siteInfoService.fetchThemeInfo();
      } catch (error) {
        console.error(chalk.red('Error fetching themes information'));
        console.error(error);
      }
    }

    // Add default theme to the list
    const defaultSite: ThemeInfo = {
      name: scConfig.defaultSite,
      theme: 'Default'
    };
    sites.unshift(defaultSite);

    console.log(`Writing site info to ${sitesFilePath}`);
    try {
    fs.writeFileSync(sitesFilePath, JSON.stringify(sites, null, 2), { encoding: 'utf8' });
    } catch (error) {
      console.error(chalk.red('Error writing site info to file'));
      console.error(error);
    };
  };
};