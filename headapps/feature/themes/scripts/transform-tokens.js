const fs = require("fs");
const path = require("path");
const glob = require("glob");
const tokenTransformer = require("token-transformer/dist/transform")
  .tokenTransformer.default;

const tokensPath = "src/**/**/tokens.json";

glob(tokensPath, (err, files) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  //console.log(files);

  files.forEach((file) => {
    const parentFolder = path.dirname(file);

    fs.readFile(file, (err, data) => {
      if (err) {
        console.log("error");
        process.exit(1);
      }
      
      const transformed = tokenTransformer(JSON.parse(data));

      fs.writeFile(
        `${parentFolder}/transformed.json`,
        JSON.stringify(transformed, null, 2),
        () => {
          console.log("\ndone");
        }
      );
    });
    
  });
});