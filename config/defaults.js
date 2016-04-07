// default data found in package.json
var site = require("../package").site;

module.exports = {
  // Used in console messages
  name: site.name,
  // Used for <title> tag in head.html
  siteTitle: site.title,
  // Used for meta description tag in head.html
  siteDescription: site.description,
  // Location of your site's main pages
  contentDir: site.contentDir,
  // Where you want the site built to
  buildDir: site.buildDir,
  // location of your CSS, JS, and images
  assetsDir: site.assetsDir,
  // The engine that will render your layouts
  templateEngine: site.templateEngine,
  // Where to look for the layouts
  layoutsDir: site.layoutsDir,
  // Where to look for partials
  partialsDir: site.partialsDir,
  // The default layout to use
  defaultLayout: site.defaultLayout
};
