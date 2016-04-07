---
title: Installing Statt
published: 2015-09-18
parentDir: blog
collection: posts
layout: post.html
---

**1. Make sure [Node](http://nodejs.org) and [npm](https://docs.npmjs.com/getting-started/installing-node) are installed.**

**2. Clone the Statt repo into a new empty project folder:**

```
git clone https://github.com/jamiewilson/statt.git <folder-name>
```

**3. Install the dependencies and create a global symlink with:**

```
npm install && npm link
```

**4. Build your site and launch the dev server with:**

```
statt
```

## Updating Statt Like a Boss
To fetch and merge the latest version of Statt without losing any customizations you've made, and to also avoid having to deal with any potential merge conflicts, stash your changes, pull, rebase, and pop your changes back on top:

```
git stash
git pull --rebase
git stash pop
```
