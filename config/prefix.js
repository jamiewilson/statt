var minimatch    = require("minimatch");
var postcss      = require("postcss");
var sassSyntax   = require("postcss-scss");
var autoprefixer = require("autoprefixer");

module.exports = function() {
  return function(files, metalsmith, done) {
    var processor = postcss([autoprefixer]);
    var targetFiles = Object.keys(files).filter(minimatch.filter("*.scss", { matchBase: true }));
    targetFiles.forEach(function(file) {
      var prefixedContents = processor.process(files[file].contents.toString(), { syntax: sassSyntax }).css;
      files[file].contents = new Buffer(prefixedContents);
    });
    done();
  };
}
