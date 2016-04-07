var defaults = require("./defaults");
var layouts = "../" + defaults.layoutsDir + "/**/*";
var content = "../" + defaults.contentDir + "/**/*";
var assets = "../" + defaults.assetsDir + "/**/*";

// https://github.com/FWeinb/metalsmith-watch
module.exports = {
  paths: {
    // Rewrite only changed files. Or `true` rebuilds all files
    [layouts]: "**/*",
    [content]: "**/*",
    [assets]: "**/*"
  },
  // Disabled logs to let Browsersync do it
  log: (options) => { "hello" }
};
