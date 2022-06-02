const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');
const normalizeMdHeadings = require('../../11ty/helpers/normalizeMdHeadings');
const normalizeMdLineBreaks = require('../../11ty/helpers/normalizeMdLineBreaks');

const normalize = (input) => {
  const functions = [{ fn: normalizeMdHeadings, args: [3] }, { fn: normalizeMdLineBreaks }];
  let result = input;
  for (let e of functions) {
    result = e.fn(result, ...(e.args || []));
  }
  return result;
};

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
  const ratesData = {
    featuredImage: data.pageSetting.featuredImage.url,
    rates: data.rates.map((item) => ({
      cottage: item.cottage,
      rate: normalize(item.rate.markdown),
    })),
  };
  return ratesData;
};
