// https://github.com/segmentio/metalsmith-permalinks
module.exports = {
  // if parentDir is specified in front-matter,
  // you can remap links, ex. /pages/posts/post.md -> yoursite.com/blog/post/
  pattern: ":parentDir/:title"
};
