const { gql } = require('graphql-request');
const {
  formatAddress,
  formatPhone,
  formatCopyright,
} = require('../../11ty/helpers/formatFooterInfo');
const getRequest = require('../../11ty/helpers/getRequest');

const FOOTER_INFO_QUERY = gql`
  query FooterInfo {
    siteSettings {
      address
      phone
      copyright
      email
    }
  }
`;

module.exports = async () => {
  const data = await getRequest(FOOTER_INFO_QUERY);
  const siteSettings = data.siteSettings[0];
  const address = formatAddress(siteSettings.address);
  const phone = formatPhone(siteSettings.phone);
  const copyright = formatCopyright(siteSettings.copyright);
  return {
    address,
    phone,
    copyright,
    email: siteSettings.email.trim(),
  };
};
