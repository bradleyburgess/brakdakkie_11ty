const formatPhone = (phone) => phone.trim().split(' ').join('');

const formatAddress = (address) =>
  address
    .trim()
    .split('\n')
    .map((elem) => elem.trim())
    .join('  \n');

const formatCopyright = (copyright) => copyright.replace('[year]', new Date().getFullYear());

module.exports = {
  formatPhone,
  formatAddress,
  formatCopyright,
};
