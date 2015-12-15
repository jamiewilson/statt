// https://github.com/segmentio/metalsmith-markdown
module.exports = {
  // Enable GitHub flavored markdown.
  gfm: true,
  // Enable GFM tables. This option requires the gfm option to be true.
  tables: true,
  // Use "smart" typograhic punctuation for things like quotes and dashes.
  smartypants: true,
  // Use smarter list behavior than the original markdown.
  smartLists: true,
  // Sanitize the output. Ignore any HTML that has been input.
  sanitize: false,
  // speficy the CSS prefix for PrismJS highlighting
  langPrefix: 'language-',
  // removes any markup with the `data-markdown` attribute
  removeAttributeAfterwards: true
};
