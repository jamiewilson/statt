---
title: Installing Statt
published: 2015-09-18
parentDir: blog
collection: posts
layout: post.html
---

## Installation

**1. Make sure [Node](http://nodejs.org) and [npm](https://docs.npmjs.com/getting-started/installing-node) are installed.**

**2. Clone this repo into a new empty project folder:**

```
git clone https://github.com/jamiewilson/statt.git <folder-name>
```

**3. Install the dependencies:**

```
npm install
```

## Usage

**Build your site and launch the dev server:**

```
npm start
```

**To rebuild a clean site with each file change:**

```
npm run clean
```

**Build without launching the dev server:**

```
npm run production
```

## Updating
To fetch and merge the latest version of Statt without losing any customizations you've made, and to also avoid having to deal with any potential merge conflicts, stash your changes, pull, rebase, and pop your changes back on top:

```
git stash
git pull --rebase
git stash pop
```
