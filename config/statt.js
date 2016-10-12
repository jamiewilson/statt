const metalsmith   = require('metalsmith')
const assets       = require('metalsmith-assets')
const collections  = require('metalsmith-collections')
const misc         = require('metalsmith-static')
const datamarkdown = require('metalsmith-data-markdown')
const dateFormat   = require('metalsmith-date-formatter')
const drafts       = require('metalsmith-drafts')
const inplace      = require('metalsmith-in-place')
const layouts      = require('metalsmith-layouts')
const markdown     = require('metalsmith-markdown')
const permalinks   = require('metalsmith-permalinks')
const scss         = require('metalsmith-sense-sass')
const uglify       = require('metalsmith-uglify')
const watch        = require('metalsmith-watch')

// Data, log, and config
const site       = require('../site')
const step       = require('./build').step
const serve      = require('./build').serve
const clean      = require('./build').clean
const production = require('./build').production
const errors     = require('./build').errors

const config = {
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
const statt = metalsmith(__dirname)
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
