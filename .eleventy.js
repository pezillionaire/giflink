module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "img/": "/" });
  // eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });
  return {
    dir: {
      output: 'dist'
    }
  }
};
