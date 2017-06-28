var site = require('../site')
var layouts = '../' + site.layoutsDir + '/**/*'
var content = '../' + site.contentDir + '/**/*'
var assets = '../' + site.assetsDir + '/**/*'

// https://github.com/FWeinb/metalsmith-watch
module.exports = {
  paths: {
    // Rewrite only changed files. Or `true` rebuilds all files
    [layouts]: '**/*',
    [content]: '**/*',
    [assets]: '**/*'
  },
  // Disabled logs to let Browsersync do it
  log: (options) => {}
}
