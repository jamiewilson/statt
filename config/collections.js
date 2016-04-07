// https://github.com/segmentio/metalsmith-collections
module.exports = {
  posts: {
    // Sort by published date in front-matter
    sortBy: "published",
    // show in reverse chronological order
    reverse: false
  },
  pages: {
    // Sort by order number specified in front-matter
    sortBy: "order"
  }
};
