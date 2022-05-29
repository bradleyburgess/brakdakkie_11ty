const { gql } = require('graphql-request');
const getRequest = require('../../11ty/helpers/getRequest');

const ABOUT_PAGE_QUERY = gql`
  query AboutPage {
    aboutSections {
      heading
      description {
        markdown
      }
      image {
        url
        description
      }
    }

    policies {
      heading
      content {
        markdown
      }
    }

    newsItems {
      title
      source
      url
      file {
        url
      }
    }
  }
`;

module.exports = async () => {
  const data = await getRequest(ABOUT_PAGE_QUERY, 'about-page');
  return data;
};
