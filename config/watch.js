const site = require('../site')
const layouts = '../' + site.layoutsDir + '/**/*'
const content = '../' + site.contentDir + '/**/*'
const assets = '../' + site.assetsDir + '/**/*'

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
