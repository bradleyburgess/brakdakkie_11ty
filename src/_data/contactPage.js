const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const CONTACT_PAGE_QUERY = gql`
  query ContactPage {
    contactImage: pageSetting(where: { pageTitle: contact }) {
      featuredImage {
        url
      }
    }

    siteSettings(first: 1) {
      socialLinks {
        name
        url
        description
      }
    }
  }
`;

module.exports = async () => {
  const data = await getRequest(CONTACT_PAGE_QUERY, 'contact-page');
  const { socialLinks } = data.siteSettings;
  const { image } = data.contactImage.featuredImage.url;
  return {
    socialLinks,
    image,
  };
};
