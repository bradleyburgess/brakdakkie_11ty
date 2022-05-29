const debug = require('debug')('Eleventy-getData-reviews');
const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const REVIEWS_REQUEST = gql`
  query Reviews {
    reviews {
      quote
      author
      url
    }
  }
`;

async function getReviewsData() {
  debug('making request');
  const data = await getRequest(REVIEWS_REQUEST, 'reviews');
  debug('got results');
  const { reviews } = data;
  debug('finished parsing; returning');
  debug('writing reviews to fs...');
  return reviews;
}

module.exports = getReviewsData;
