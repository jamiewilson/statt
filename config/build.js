//  Start, Steps, and Build Error Messages
const chalk = require('chalk')
const browsersync = require('browser-sync').create()
const bsConfig = require('./browsersync')
const buildType = (process.env.NODE_ENV || '');

// Inform what type of build has started
console.log(chalk.blue(`Building: ${buildType.toUpperCase()}\n`))

module.exports = {
  // Log each step as it finishes
  step: message => { console.log(chalk.green('>> ') + message) },

  // if NODE_ENV=clean this returns true
  clean: (buildType === 'clean'),

  // if NODE_ENV=production then return true
  production: (buildType === 'production'),
  errors: err => { if (err) throw err },

  // Launch Browsersync server after build is done
  serve: function (err) {
    console.log();
    browsersync.init(bsConfig)
    if (err) {
      // Reports any build errors on initial build
      console.log(chalk.magenta('\n' + 'Oops, there was a problem!'))
      console.log(err.message + '\n')
    }
  }
}
