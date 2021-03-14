module.exports = {
  siteMetadata: {
    author: "Jasper Zhou",
    title: "Traffic Dev Test",
    titleTemplate: "%s · The Property CMS",
    description:
      "A gastby solution to traffic dev test",
    url: "https://www.linkedin.com/in/jasper-zhou-8bbb9084/",
    image: "/src/assets/images/eliston.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jasper_kwok",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/images/eliston.png`
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: { include: /svgs/ },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
