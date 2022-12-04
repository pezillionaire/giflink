module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/giflink/": "/" });
  eleventyConfig.addPassthroughCopy({ "src/icon.gif": "/favicon.ico" });
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};
