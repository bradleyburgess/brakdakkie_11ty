const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const RATES_PAGE_QUERY = gql`
  query RatesPage {
    rates {
      cottage
      rate {
        markdown
      }
    }

    pageSetting(where: { pageTitle: rates }) {
      featuredImage {
        url
      }
    }
  }
`;

module.exports = async () => {
  const data = await getRequest(RATES_PAGE_QUERY, 'rates-page');
  return data;
};
