const debug = require('debug')('Eleventy-getData-fsbackgrounds');
const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const FSBACKGROUNDS_REQUEST = gql`
  query FSBackgrounds {
    home: pageSetting(where: { pageTitle: home }) {
      featuredImage {
        url
      }
    }
    contact: pageSetting(where: { pageTitle: contact }) {
      featuredImage {
        url
      }
    }
  }
`;

async function getFsBackgrounds() {
  debug('making request');
  const data = await getRequest(FSBACKGROUNDS_REQUEST, 'fsbackgrounds');
  debug('got results');
  const home = data.home.featuredImage.url;
  const contact = data.contact.featuredImage.url;
  debug('finished parsing; returning');
  return {
    home,
    contact,
  };
}

module.exports = getFsBackgrounds;
