// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Galen Erso",
  plugins: [
    {
      use: "gridsome-source-graphql",
      options: {
        url: "http://wpprep.local/graphql",
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
      },
    },
  ],
};
