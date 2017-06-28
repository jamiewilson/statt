var site = require('../site')

// https://github.com/stevenschobert/metalsmith-sass
module.exports = {
  sass: {
    // the places to look for SCSS files to process
    includePaths: [site.assetsDir + '/css'],
    // where to put processed files in the build directory
    outputDir: 'css',
    // Embed sass contents in your source maps
    sourceMapContents: true
  }
}
