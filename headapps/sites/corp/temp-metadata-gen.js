const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npm query [name*=@sitecore] --workspaces true --json', {
    encoding: 'utf-8'
  });

  const packagesArray = JSON.parse(output);
  const packages = {};

  packagesArray.forEach(pkg => {
    if (pkg.name && pkg.version) {
      packages[pkg.name] = pkg.version;
    }
  });

  const metadata = { packages };

  fs.writeFileSync('./.sitecore/metadata.json', JSON.stringify(metadata, null, 2), 'utf-8');
  console.log('metadata.json has been generated.');
} catch (err) {
  console.error('Failed to generate metadata:', err.message);
}
