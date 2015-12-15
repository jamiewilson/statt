# Statt
#### A [Metalsmith](http://metalsmith.io) workflow and boilerplate for building static sites.

It uses [Browsersync](http://browsersync.io) to autoreload on file changes, synchronize scrolls and clicks between browsers, and provide a [public URL](http://localtunnel.me) for easy cross-device development. It compiles, [autoprefixes](https://github.com/postcss/autoprefixer), minifies, and sourcemaps [SCSS](http://sass-lang.com/) and concatenates and uglifies JS. It has some default layouts and partials written in [Handlebars](http://handlebarsjs.com) and some blog posts written in [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/). Easily deploy your project with a custom domain for free using [Surge](https://surge.sh).

## Installation

**1. Make sure [Node](http://nodejs.org) and [npm](https://docs.npmjs.com/getting-started/installing-node) are installed.**

**2. Clone the Statt repo into a new empty project folder:**

```
git clone https://github.com/jamiewilson/statt.git <folder-name>
```

_Or manually install by downloading the [latest release](https://github.com/jamiewilson/statt/releases)._

**3. Install the dependencies and create a global symlink with:**

```
npm install && npm link
```

## Usage

**1. Build your site and launch the dev server with:**

```
statt
```

**2. To deploy your site with [Surge](https://surge.sh/):**

```
deploy
```

**3. When asked by Surge, set your project path to your build folder location. For example:**

```
project path: ~/projects/mysite/build
```

_Et voilà._

## Complete list of plugins/packages:

**[Metalsmith](http://metalsmith.io)**  
An extremely simple, pluggable static site generator.

**[Browsersync](https://github.com/Browsersync/browser-sync)**  
Keep multiple browsers & devices in sync when building websites.

**[Handlebars](http://handlebarsjs.com/)**  
Clean logicless templates based on the [Mustache Templating Language](http://mustache.github.com/).

**[Surge](https://github.com/sintaxi/surge)**  
Publish web apps to a CDN with a single command and no setup required.

### Metalsmith Plugins

**[metalsmith-assets](https://github.com/treygriffith/metalsmith-assets)**  
Include static assets in your build. _Used to create a separate `/assets` folder._

**[metalsmith-autoprefixer](https://github.com/esundahl/metalsmith-autoprefixer)**  
Automatically add vendor prefixes to CSS.

**[metalsmith-collections](https://github.com/segmentio/metalsmith-collections)**  
Groups files together into collections, which it adds to the global metadata.

**[metalsmith-static](https://github.com/TheHydroImpulse/metalsmith-static)**  
Copy public assets into the build directory. _Used to create a `/repo` folder that includes files like a `README`, `CNAME`, or `.gitignore`_

**[metalsmith-date-formatter](https://github.com/hellatan/metalsmith-date-formatter)**  
Format dates defined in the YAML Front Matter.

**[metalsmith-drafts](https://github.com/segmentio/metalsmith-drafts)**  
Hide any files marked as drafts.

**[metalsmith-in-place](https://github.com/superwolff/metalsmith-in-place)**  
Allows you to render templating syntax in your source files.

**[metalsmith-layouts](https://github.com/superwolff/metalsmith-in-place)**  
Allows you to apply layouts to your source files.

**[metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown)**  
Convert Markdown files to HTML.

**[metalsmith-data-markdown](https://github.com/majodev/metalsmith-data-markdown)**  
Use markdown content within html tags via data-markdown attribute.

**[metalsmith-permalinks](https://github.com/segmentio/metalsmith-permalinks)**  
Apply custom permalinks and rename files to be nested properly for static sites, basically converting about.html into about/index.html.

**[metalsmith-prism](https://github.com/Availity/metalsmith-prism)**  
Syntax highlighting for HTML templates using [Prism.js](http://prismjs.com/).

**[metalsmith-sass](https://github.com/stevenschobert/metalsmith-sass)**  
Convert Sass/SCSS syntax to CSS.

**[metalsmith-uglify](https://github.com/ksmithut/metalsmith-uglify)**  
Concats/uglifies/minifies your JavaScript files.

**[metalsmith-watch](https://github.com/FWeinb/metalsmith-watch)**  
Watches for a changes and triggers rebuilds.

### Misc.

**[Chalk](https://github.com/chalk/chalk)**  
Terminal string styling done right.

## Updating
To fetch and merge the latest version of Statt without losing any customizations you've made, and to also avoid having to deal with any potential merge conflicts, stash your changes, pull, rebase, and pop your changes back on top:

```
git stash
git pull --rebase
git stash pop
```
