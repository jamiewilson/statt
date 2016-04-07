//  Start, Steps, and Build Error Messages
var chalk = require("chalk");
var browsersync = require("browser-sync").create();
var config = { browsersync: require("./browsersync") };

// Inform that the site build has started
(function(){
  console.log("\n" + chalk.underline("Building your site\n"));
})();

module.exports = {
  // Log each step as it finishes
  step: function(message) {
    console.log(chalk.green(">> ") + message);
  },
  // Launch Browsersync server after build is done
  serve: function(error) {
    browsersync.init(config.browsersync);
    if (error) {
      // Reports any build errors on initial build
      // TODO: throw after a rebuild as well
      console.log(chalk.magenta.underline("\nOops, there was a problem!"));
      console.log(error.message + "\n");
    }
  }
}
