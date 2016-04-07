var defaults = require("./defaults");

// https://github.com/superwolff/metalsmith-layouts
module.exports = {
  // The engine that will render your layouts
  engine: defaults.templateEngine,
  // Where to look for the layouts
  directory: "../" + defaults.layoutsDir,
  // Where to look for partials
  partials: "../" + defaults.partialsDir,
  // The default layout to use
  default: defaults.defaultLayout
};
