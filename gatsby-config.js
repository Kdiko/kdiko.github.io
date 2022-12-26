/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kdiko`,
    image: `/kdiko-logo.png`,
    siteUrl: `https://www.kdiko.se`
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kdiko",
        short_name: "Kdiko",
        icon: "src/images/kdiko-logo.png",
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap`,
          },
        ],
      },
    },
  ]
};