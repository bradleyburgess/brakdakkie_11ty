require('dotenv').config();
const dir = require('./11ty/constants/dir');

const brokenLinks = require('eleventy-plugin-broken-links');
const faviconPlugin = require('eleventy-plugin-gen-favicons');
const findFilter = require('./11ty/filters/find');
const htmlminTransform = require('./11ty/transforms/htmlmin');
const imageShortcode = require('./11ty/shortcodes/image');
const markdownShortcode = require('./11ty/shortcodes/markdown');
const ogImageShortcode = require('./11ty/shortcodes/ogimage');
const ogMetaShortcode = require('./11ty/shortcodes/ogmeta');
const prettierTransform = require('./11ty/transforms/prettier');
const sanitizeHtmlAttr = require('./11ty/helpers/sanitizeHtmlAttr');
const toAbsoluteUrlFilter = require('./11ty/filters/toAbsoluteUrl');
const objectHasFilter = require('./11ty/filters/object-has');
const jsminFilter = require('./11ty/filters/jsmin');
const makeArrayFilter = require('./11ty/filters/makeArray');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./11ty');
  eleventyConfig.addWatchTarget('./src');
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });

  // filters
  eleventyConfig.addFilter('sanitizeHtmlAttr', sanitizeHtmlAttr);
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrlFilter);
  eleventyConfig.addFilter('has', objectHasFilter);
  eleventyConfig.addFilter('jsmin', jsminFilter);
  eleventyConfig.addFilter('makeArray', makeArrayFilter);
  eleventyConfig.addFilter('markdown', markdownShortcode);
  eleventyConfig.addFilter('find', findFilter);
  eleventyConfig.addFilter('keys', (obj) => Object.keys(obj));

  // shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode('ogimage', ogImageShortcode);
  eleventyConfig.addNunjucksShortcode('ogmeta', ogMetaShortcode);
  eleventyConfig.addPairedNunjucksShortcode('markdown', markdownShortcode);

  // plugins
  eleventyConfig.addPlugin(brokenLinks);
  eleventyConfig.addPlugin(faviconPlugin, {
    outputDir: dir.output,
    generateManifest: false,
  });

  // transforms, for prettifying and minifying
  eleventyConfig.addTransform('prettier', prettierTransform);
  eleventyConfig.addTransform('htmlmin', htmlminTransform);

  return {
    dir,
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
