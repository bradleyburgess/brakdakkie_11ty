module.exports = function (input) {
  return input ? input.replace(/"/g, "'").replace(/&/g, '&amp;').replace(/`/g, '') : '';
};
