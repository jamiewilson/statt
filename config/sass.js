var defaults = require("./defaults");

// https://github.com/stevenschobert/metalsmith-sass
module.exports = {
  // the places to look for SCSS files to process
  includePaths: [ defaults.assetsDir + "/css"],
  // where to put processed files in the build directory
  outputDir: "css",
  // Determines the output format of the final CSS style
  outputStyle: "compressed",
  // Enables the outputting of a source map
  sourceMap: true,
  // Embed sass contents in your source maps
  sourceMapContents: true
};
