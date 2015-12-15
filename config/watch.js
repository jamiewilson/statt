// https://github.com/FWeinb/metalsmith-watch
module.exports = {
  paths: {
    // Rewrite only changed files. Or `true` rebuilds all files
    '../layouts/**/*': '**/*',
    '../pages/**/*': '**/*',
    '../assets/**/*': '**/*'
  },
  // Disabled logs to let Browsersync do it
  log: (options) => {}
};
