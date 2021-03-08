// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      
        query {
          posts {
            edges {
              node {
                id
                uri
              }
            }
          }
        }
      
    `);

    data.posts.edges.forEach(({ node, id }) => {
      createPage({
        path: `/blog/${node.uri}`,
        component: "./src/templates/Post.vue",
        context: {
          id: node.id,
        },
      });
    });
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      
        query {
          pages {
            edges {
              node {
                id
                uri
              }
            }
          }
        }
      
    `);

    data.pages.edges.forEach(({ node, id }) => {
      createPage({
        path: `/${node.uri}`,
        component: "./src/templates/Page.vue",
        context: {
          id: node.id,
        },
      });
    });
  });
};
