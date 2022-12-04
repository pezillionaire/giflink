module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/giflink/": "/" });
  // eleventyConfig.addPassthroughCopy({ "src/icon.gif": "icon.gif" });
  eleventyConfig.addPassthroughCopy({ "src/icon.gif": "/favicon.ico" });
  // eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};
