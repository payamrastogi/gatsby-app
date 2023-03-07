module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          url: `http://localhost:8080/index.php?graphql` // 👋
        }
      },
      `gatsby-plugin-gatsby-cloud`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
    ]
  };