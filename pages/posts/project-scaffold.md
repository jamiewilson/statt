---
title: Project Scaffold
published: 2015-10-25
parentDir: blog
collection: posts
layout: post.html
defaults:
  templates:
    - page
    - post
    - landing
  partials:
    - head
    - nav
    - header
    - footer
    - scripts
    - errors
---

## To get your new site started, there are some basic layouts, partials, pages, and posts already set up for you.

**There are {{#with defaults.templates}}{{length}}{{/with}} templates:**
<ul>
  {{#each defaults.templates}}
    <li>`{{this}}` — `layouts/{{this}}.html`</li>
  {{/each}}
</ul>

**And {{#with defaults.partials}}{{length}}{{/with}} partials:**
<ul>
  {{#each defaults.partials}}
    <li>`{{this}}` — `layouts/partials/{{this}}.html`</li>
  {{/each}}
</ul>

**Which are used to make these {{#with pages}}{{add length 1}}{{/with}} pages:**
<ul>
  <li>`overview` — `pages/index.html`</li>
  {{#each pages}}
    <li>`{{path}}` — `pages/{{path}}.html`</li>
  {{/each}}
</ul>

**And these {{#with posts}}{{length}}{{/with}} example posts:**
<ul>
  {{#each posts}}
    <li>`{{title}}` — `pages/posts/{{slugify title}}.md`</li>
  {{/each}}
</ul>
