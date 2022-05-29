const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async () => {
  const url =
    'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:wght@300;400;500;600;700&display=swap';

  try {
    const css = await EleventyFetch(url, {
      duration: '1d',
      type: 'text',
      fetchOptions: {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        },
      },
    });
    return css;
  } catch (error) {
    console.log('Failed to fetch Google Fonts. Returning blank');
    return '';
  }
};
