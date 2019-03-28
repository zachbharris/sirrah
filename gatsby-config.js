module.exports = {
  siteMetadata: {
    title: `Zach Harris`,
    description: `Zach Harris, UI Engineer in St. Louis`,
    author: `@zachbharris`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sirrah`,
        short_name: `sirrah`,
        start_url: `/`,
        background_color: `#1A191A`,
        theme_color: `#E0A730`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        include_favicon: true
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`]
          },
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `500`, `700`]
          }
        ]
      }
    }
  ]
}
