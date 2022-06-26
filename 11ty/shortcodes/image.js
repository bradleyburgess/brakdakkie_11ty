const debug = require('debug')('Eleventy-image');
const path = require('path');
const Image = require('@11ty/eleventy-img');
const dir = require('../constants/dir');
const sanitizeAltText = require('../helpers/sanitizeHtmlAttr');
const checkRemoteSrc = require('../helpers/checkRemoteSrc');

const defaults = {
  formats: ['webp', 'jpg'],
  loading: 'lazy',
  sizes: ['100vw'],
  widths: [600, 900, 1200, 1800, 2400, 4200, null],
  galleryImage: false,
};

module.exports = async function (src, alt, _options) {
  const options = { ...defaults, ...(_options ?? {}) };
  const { widths, formats, loading, sizes } = options;

  if (alt === undefined) {
    console.error(`\x1b[31mMissing alt for ${src} in ${this.page.inputPath}`);
    process.exit(1);
  }

  const isRemoteSrc = checkRemoteSrc(src);

  const imgDir = '/img';
  const fullyQualifiedSrc = isRemoteSrc
    ? src
    : path.join(dir.input, path.parse(src).dir, path.parse(src).base);
  const outputDir = path.join(dir.output, 'img');

  console.log(`Transforming image: ${src} in${this.page.inputPath}`);
  debug('transforming image: ' + src);

  const metadata = await Image(fullyQualifiedSrc, {
    widths,
    formats,
    outputDir,
    urlPath: imgDir,
  });

  const imageAttributes = {
    alt: sanitizeAltText(alt),
    sizes,
    loading,
    decoding: 'async',
  };

  if (options.class) imageAttributes.class = options.class;

  const html = Image.generateHTML(metadata, imageAttributes);
  debug('done transforming; returning');

  if (options.galleryImage) {
    const lastWebp = metadata.webp[metadata.webp.length - 1];
    return `<a href="${lastWebp.url}"
    data-pswp-width="${lastWebp.width}"
    data-pswp-height="${lastWebp.height}">${html}</a>`;
  }
  return html;
};
