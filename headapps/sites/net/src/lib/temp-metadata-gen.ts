import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

export function generateMetadataCustom() {
  return async () => {
    try {
      const output = execSync('npm query [name*=@sitecore] --workspaces true --json', {
        encoding: 'utf-8',
      });

      const packagesArray = JSON.parse(output);
      const packages: Record<string, string> = {};

      packagesArray.forEach((pkg: { name: string; version: string }) => {
        if (pkg.name && pkg.version) {
          packages[pkg.name] = pkg.version;
        }
      });

      const metadata = { packages };
      writeFileSync('.sitecore/metadata.json', JSON.stringify(metadata, null, 2), 'utf-8');
      console.log('✅ metadata.json generated');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('❌ Failed to generate metadata:', err.message);
      } else {
        console.error('❌ Unknown error occurred during metadata generation');
      }
      throw err;
    }
  };
}
