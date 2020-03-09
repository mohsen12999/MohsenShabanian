/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Mohsen Shabanian`,
    description: `Mohsen Shabanian Personal Website`,
    author: `Mohsen Shabanian`,
    twitter: `@mohsen1299`,
    pic: `https://mohsenshabanian.com/images/me.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
    },
  ],
}
