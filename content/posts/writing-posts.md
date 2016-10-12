---
title: Writing Posts
published: 2015-12-05
parentDir: blog
collection: posts
layout: post.html
---

<small>{{published}}</small>

## Markdown allows you to write using an easy-to-read, easy-to-write plain text format that converts to HTML.

By typing different characters and punctuation, you can **bold**, _italicize_, [link](http://thisismarkdown.com/) your text, and display images.

### Bold
Wrap words with two asterisks:

    **I am bold.**

### Italic
Wrap words with an underscore:

    _I am italic._

### Links
Wrap word(s) in square brackets and the link in parentheses:

    [I am a [link](http://thisismarkdown.com/)

### Images
Like a text link, but with an exclamation point at the beginning:

    ![Optional Alt Text](/img/example.gif "Optional title")

_Note: You **must** link directly to an image, i.e. ending in `.gif`, `.jpg`, etc._

![fullwidth](https://farm6.static.flickr.com/5029/5658551241_8852d44b38_o.gif "An Emedded Image in Markdown")

### New Lines
To create a new line, you need to end with two empty spaces (shown as black boxes below):

    This will be on the first line🁢🁢  
    and this will be on the second line

### Headings
Using the `#` symbol you can set **H3** through **H6** headings. Unfortunately, **H1** and **H2** aren't working right now.

    ### This is an H3
    #### This is an H4


## More Options

### Bulleted Lists
Add a dash `-` in front of each line:

    - Item One
    - Item Two
    - Item Three

### Numbered Lists
Add a number and period in front of each line:

    1. Item One
    1. Item Two
    1. Item Three

_Note: That's not a typo. Using only `1.` will still convert to a proper numbered list, which makes reordering lists a lot easier_

### Block Quotes
Add a  ` > ` at the beginning of a paragraph to quote it:

    > this line will look like the quote below

> this is what a blockquote looks like

### Inline Code
Wrap text in a single backtick at the top left of your keyboard:

    `border-radius: 3px;`

### Code Block
Wrap code with triple backticks, and add the language name like so:

    ```html
    <main>
      <aside>pages/blog/index.html</aside>
      <div>
        <h1>Blog</h1>
        <ul>
           <li>{{ title }}</li>
        </ul>
      </div>
    </main>
    ```

### Horizontal Rules
To create a horizontal line for separating content use:

    *** OR ---

### Tables
Using vertical lines `|`, you can even create tables:  

| Making      |  Markdown   |   Tables |
|-------------|:-----------:|---------:|
| This column |   This one  | And this |
| is left     |  is set to  | is right |
| align       | be centered |  aligned |

The markdown to create this _(notice the use of `:` to indicate alignment)_:  

    | Making      |  Markdown   |   Tables |
    |-------------|:-----------:|---------:|
    | This column |   This one  | And this |
    | is left     |  is set to  | is right |
    | align       | be centered |  aligned |

**To learn even more about Markdown, check out https://daringfireball.net/projects/markdown/**
