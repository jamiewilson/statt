const site = require('../site')

// https://github.com/TheHydroImpulse/metalsmith-static
module.exports = {
  // take contents from repo
  src: '../' + site.miscDir,
  // and place them into the root of /build
  dest: '.'
}
