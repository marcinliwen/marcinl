module.exports = {
  siteMetadata: {
    title: `Marcin L.`,
    description: `Frontend portoflio website`,
    author: `marcinl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marcin L. - Frontend portfolio`,
        short_name: `Marcin L.`,
        start_url: `/`,
        background_color: `#313131`,
        theme_color: `#313131`,
        display: `minimal-ui`,
        icon: `src/images/ml-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
