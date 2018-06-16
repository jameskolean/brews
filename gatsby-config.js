module.exports = {
  mapping: {
    "MarkdownRemark.fields.brew": "MarkdownRemark"
  },
  siteMetadata: {
    title: "My Brews",
    desc: "Check out what's brewing"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/assets/images/`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gloria+Hallelujah`,
          `Roboto`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ]
};
