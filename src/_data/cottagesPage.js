const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const COTTAGES_PAGE_QUERY = gql`
  query CottagesPage {
    cottages {
      number
      heading
      bookingLink
      description {
        markdown
      }
      gallery {
        description
        url
      }
    }

    socialLink(where: { name: "TripAdvisor" }) {
      url
    }

    rates {
      cottage
      rate {
        markdown
      }
    }

    pageSetting(where: { pageTitle: cottages }) {
      featuredImage {
        url
        description
      }
    }
  }
`;

module.exports = async () => {
  const data = await getRequest(COTTAGES_PAGE_QUERY, 'cottages-page');
  return data;
};
