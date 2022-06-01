module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      url: ['http://localhost/index.html', 'http://localhost/about/index.html'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
