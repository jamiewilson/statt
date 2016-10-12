// https://github.com/ksmithut/metalsmith-uglify
module.exports = {
  // put dependencies before other js files
  order: '**',
  // concat and compress
  concat: 'js/main.js',
  // remove original unminified files
  removeOriginal: true,
  // create a map file
  sourceMap: true
}
