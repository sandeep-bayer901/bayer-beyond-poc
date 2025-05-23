import config from './sitecore.config';
import { defineCliConfig } from '@sitecore-content-sdk/nextjs/config';
import { generateSites, generateMetadata } from '@sitecore-content-sdk/nextjs/tools';
import { generateSiteThemes } from '@catalyst/feature-themes/src/utils';
import { generateMetadataCustom } from './src/lib/temp-metadata-gen';

export default defineCliConfig({
  build: {
    commands: [
      generateMetadata(), // existing command from Sitecore SDK
      generateMetadataCustom(), // TEMP WORKAROUND!
      generateSites({
        scConfig: config,
      }),
      generateSiteThemes({
        scConfig: config,
      }),
    ],
  },
});
