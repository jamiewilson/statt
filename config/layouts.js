var site = require('../site')

// https://github.com/superwolff/metalsmith-layouts
module.exports = {
  // The site that will render your layouts
  engine: site.templateEngine,
  // Where to look for the layouts
  directory: '../' + site.layoutsDir,
  // Where to look for partials
  partials: '../' + site.partialsDir,
  // The default layout to use
  default: site.defaultLayout
}
