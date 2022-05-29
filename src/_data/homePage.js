const debug = require('debug')('Eleventy-getData-home-page');
const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const HOME_PAGE_REQUEST = gql`
  query HomePage {
    homeSettings: siteSettings(first: 1) {
      siteTitle
      siteTagline {
        markdown
      }
    }
    homeImage: pageSetting(where: { pageTitle: home }) {
      featuredImage {
        url
      }
    }
    socialLink(where: { name: "TripAdvisor" }) {
      url
    }
  }
`;

module.exports = async () => {
  debug('making request');
  const data = await getRequest(HOME_PAGE_REQUEST, 'home-page');
  debug('got results');
  const { siteTitle, siteTagline } = data.homeSettings[0];
  const image = data.homeImage.featuredImage;
  const tripAdvisorLink = data.socialLink.url;
  debug('finished parsing; returning');
  return {
    siteTitle,
    siteTagline: siteTagline.markdown,
    image: image.url,
    tripAdvisorLink,
  };
};
