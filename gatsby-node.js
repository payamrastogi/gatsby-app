// gatsby-node.js

exports.createPages = async ({ graphql, actions }) => {
    const {
      data: { allWpPage }
    } = await graphql(`
      query {
        allWpPost {
          nodes {
            id
            uri
          }
        }
      }
    `);
  
    allWpPage.nodes.map((page) => {
      const { id, uri } = page;
  
      return actions.createPage({
        path: uri,
        component: require.resolve('./src/templates/wp-page-template.js'),
        context: {
          id: id
        }
      });
    });
  };