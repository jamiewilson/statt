var metalsmith   = require('metalsmith')
var assets       = require('metalsmith-assets')
var collections  = require('metalsmith-collections')
var misc         = require('metalsmith-static')
var datamarkdown = require('metalsmith-data-markdown')
var dateFormat   = require('metalsmith-date-formatter')
var drafts       = require('metalsmith-drafts')
var inplace      = require('metalsmith-in-place')
var layouts      = require('metalsmith-layouts')
var markdown     = require('metalsmith-markdown')
var permalinks   = require('metalsmith-permalinks')
var scss         = require('metalsmith-sense-sass')
var uglify       = require('metalsmith-uglify')
var watch        = require('metalsmith-watch')

// Data, log, and config
var site       = require('../site')
var step       = require('./build').step
var serve      = require('./build').serve
var clean      = require('./build').clean
var production = require('./build').production
var errors     = require('./build').errors

var config = {
  assets:      require('./assets'),
  collections: require('./collections'),
  misc:        require('./misc'),
  dateFormat:  require('./dateFormat'),
  helpers:     require('./helpers'),
  layouts:     require('./layouts'),
  markdown:    require('./markdown'),
  permalinks:  require('./permalinks'),
  scss:        require('./scss'),
  uglify:      require('./uglify'),
  watch:       require('./watch')
}

// Base build pipeline - order matters!
var statt = metalsmith(__dirname)
  .clean(clean || production)
  .metadata(site,                       step('Metadata defined'))
  .source('../' + site.contentDir,      step('Content sourced'))
  .destination('../' + site.buildDir,   step('Build directory created'))
  .use(markdown(config.markdown),       step('Markdown files converted'))
  .use(drafts(),                        step('Draft posts hidden'))
  .use(dateFormat(config.dateFormat),   step('Post dates formatted'))
  .use(collections(config.collections), step('Collections defined'))
  .use(permalinks(config.permalinks),   step('Permalinks created'))
  .use(layouts(config.layouts),         step('Layouts applied'))
  .use(inplace(config.layouts),         step('Templating rendered'))
  .use(datamarkdown(config.markdown),   step('Data-markdown converted'))
  .use(assets(config.assets),           step('Assets folder copied'))
  .use(scss(config.scss),               step('SCSS compiled & prefixed'))
  .use(uglify(config.uglify),           step('JS concatenated & minified'))
  .use(misc(config.misc),               step('Misc folder copied'));

// Production or Dev Environment
(production) ? statt.build(errors) : statt.use(watch(config.watch)).build(serve)
