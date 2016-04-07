#!/usr/bin/env node
var chalk = require("chalk");

console.log("\nUse Surge to deploy your site. Learn more at " + chalk.green.underline("https://surge.sh/"));
console.log("Just set your `project path` to your build folder");

// View docs at https://surge.sh/help/
require("child_process").spawn("surge", {stdio: "inherit"});
