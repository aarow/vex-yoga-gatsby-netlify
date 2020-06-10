module.exports = {
  siteMetadata: {
    title: `Vex Yoga`,
    author: {
      name: `Aaron Neville`,
      summary: `...`,
    },
    description: `...`,
    siteUrl: `https://vexyoga.com`,
    social: {
      twitter: `vexyoga`,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter Blog`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `content/assets/gatsby-icon.png`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    "gatsby-plugin-netlify-cms",
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `IBM Plex Serif\:200`,
    //       `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["IBM Plex Serif:200", "Open Sans Pro:300,400,500"],
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     postCssPlugins: [
    //       require("tailwindcss"),
    //       require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
