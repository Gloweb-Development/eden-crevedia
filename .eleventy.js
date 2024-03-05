module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/style.css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/PHPMAILER");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/form_handler.php");
  eleventyConfig.addPassthroughCopy("src/css/tailwind_dist.css");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  //Filters
  eleventyConfig.addFilter("pageCategoryFilter", function (collection, category, isExclude) {
    if (!category) {
      return collection;
    }
    const filtered = collection.filter((item) => (isExclude ? item.data.category !== category : item.data.category === category));
    return filtered;
  });

  eleventyConfig.addFilter("clearTrailingSlash", (input) => {
    return input.replace(/\/+$/, "");
  });

  return {
    pathPrefix: "/edencrevedia",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
