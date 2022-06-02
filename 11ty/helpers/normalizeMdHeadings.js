const normalizeMdHeadings = (input, level) =>
  input.replace(/^#+/gm, Array(level).fill('#').join(''));

module.exports = normalizeMdHeadings;
