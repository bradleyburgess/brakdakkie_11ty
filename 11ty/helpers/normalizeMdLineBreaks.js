const normalizeMdLineBreaks = (string) =>
  string
    .split('\n')
    .map((e) => e.trim())
    .reduce((a, c) => (c === '' ? a + '\n\n' : a + c + '  \n'))
    .trim();

module.exports = normalizeMdLineBreaks;
