var metalsmith   = require('metalsmith');
var assets       = require('metalsmith-assets');
var collections  = require('metalsmith-collections');
var copy         = require('metalsmith-static');
var datamarkdown = require('metalsmith-data-markdown');
var dateFormat   = require('metalsmith-date-formatter');
var drafts       = require('metalsmith-drafts');
var inplace      = require('metalsmith-in-place');
var layouts      = require('metalsmith-layouts');
var markdown     = require('metalsmith-markdown');
var permalinks   = require('metalsmith-permalinks');
var prefix       = require('metalsmith-autoprefixer');
var prism        = require('metalsmith-prism');
var sass         = require('metalsmith-sass');
var uglify       = require('metalsmith-uglify');
var watch        = require('metalsmith-watch');

//========================
//  Log and config files
//========================

var log = require('./log');

var config = {
  assets:      require('./assets'),
  collections: require('./collections'),
  copy:        require('./copy'),
  dateFormat:  require('./dateFormat'),
  defaults:    require('./defaults'),
  helpers:     require('./helpers'),
  layouts:     require('./layouts'),
  markdown:    require('./markdown'),
  permalinks:  require('./permalinks'),
  sass:        require('./sass'),
  uglify:      require('./uglify'),
  watch:       require('./watch')
};

//=======================================
//  Build pipeline - order does matter!
//=======================================

metalsmith(__dirname)
  .clean(false)
  .source('../' + config.defaults.src)
  .destination('../' + config.defaults.dest)
  .metadata(config.defaults,            log.step('Defaults Defined'))
  .use(markdown(config.markdown),       log.step('Markdown Files to HTML'))
  .use(prism(),                         log.step('Code Highlighted'))
  .use(drafts(),                        log.step('Drafts Hidden'))
  .use(dateFormat(config.dateFormat),   log.step('Dates Formatted'))
  .use(collections(config.collections), log.step('Collections Defined'))
  .use(permalinks(config.permalinks),   log.step('Permalinks Created'))
  .use(layouts(config.layouts),         log.step('Layouts Applied'))
  .use(inplace(config.layouts),         log.step('Templating Rendered'))
  .use(datamarkdown(config.markdown),   log.step('Markdown Content to HTML'))
  .use(assets(config.assets),           log.step('Assets Folder Copied'))
  .use(copy(config.copy),               log.step('Repo Folder Copied'))
  .use(prefix(),                        log.step('CSS Prefixed'))
  .use(sass(config.sass),               log.step('SCSS Processed'))
  .use(uglify(config.uglify),           log.step('JS Uglified'))
  .use(watch(config.watch))
  .build(log.build);
