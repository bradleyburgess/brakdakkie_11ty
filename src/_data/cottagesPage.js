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
  return {
    cottages: data.cottages.map(({ number, heading, bookingLink, description, gallery }) => ({
      number,
      heading,
      description: description.markdown,
      bookingLink,
      gallery,
    })),
    socialLink: data.socialLink.url,
    rates: data.rates.map(({ cottage, rate }) => ({ cottage, rate: rate.markdown })),
    featuredImage: data.pageSetting.featuredImage,
  };
};
