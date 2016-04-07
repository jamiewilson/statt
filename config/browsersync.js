var defaults = require("./defaults");
var children = "/**/*";

// http://www.browsersync.io/docs/options/
module.exports = {
  // the directory of our build
  server: defaults.buildDir,
  // Use projectName for terminal logs
  logPrefix: defaults.name,
  // Disable the Browsersync UI
  ui: false,
  // use localtunnel.me to serve public link over https
  // tunnel: defaults.projectName.toLowerCase(),
  // open the local url automatically
  open: "local",
  // don't show Browsersync notifications in-browser
  notify: false,
  // Assume that you're connected to the internet
  online: true,
  // Don't mirror scrolling, clicks by defualt
  ghostMode: false,
  // Delay reload to ensure enough time for rebuilds
  reloadDelay: 200,
  // Terminal logs: either "info", "debug", "warn", or "silent"
  logLevel: "info",
  // Watch these files for changes
  files: [
    defaults.layoutsDir + children,
    defaults.contentDir + children,
    defaults.assetsDir + children
  ]
};
