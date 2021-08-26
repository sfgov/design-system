module.exports = {
  eleventyComputed: {
    title: data => data.title || data.icon?.name
  }
}
