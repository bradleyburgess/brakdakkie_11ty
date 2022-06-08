module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      url: [
        'http://localhost/index.html',
        'http://localhost/about/index.html',
        'http://localhost/rates/index.html',
        'http://localhost/cottages/index.html',
        'http://localhost/contact/index.html',
      ],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
        'image-size-responsive': 'warn',
        'uses-responsive-images': 'warn',
        'tap-targets': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
