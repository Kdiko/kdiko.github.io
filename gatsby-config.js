/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Kdiko",
    image: "/kdiko-logo.png",
    siteUrl: "https://www.kdiko.se",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kdiko",
        short_name: "Kdiko",
        icon: "src/images/kdiko-logo.png",
      },
    },
  ],
};
