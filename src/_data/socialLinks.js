const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const SOCIAL_LINKS_QUERY = gql`
  query SocialLinks {
    socialLinks {
      name
      url
      description
    }
  }
`;

module.exports = async () => {
  const data = await getRequest(SOCIAL_LINKS_QUERY, 'social-links-query');
  const { socialLinks } = data;
  const mobileMenu = socialLinks.filter((link) =>
    ['phone', 'email', 'google maps', 'whatsapp'].includes(link.name.toLowerCase())
  );
  return {
    mobileMenu,
    all: socialLinks,
  };
};
