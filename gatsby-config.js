module.exports = {
  mapping: {
    "MarkdownRemark.fields.brew": "MarkdownRemark",
  },
  siteMetadata: {
    title: 'My Brews',
    desc: 'Check out what\'s brewing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images/`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    "gatsby-plugin-netlify-cms"
  ],
}
