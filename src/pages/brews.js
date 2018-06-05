import React from 'react'
import Link from 'gatsby-link'
import BrewListing from "../components/brew/brew-listing";

const IndexPage = ({data}) => (
  <div>
    <h2>Brews</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BrewListing key={node.id} course={node} />
    ))}
  </div>)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            type
            title
            subtitle
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt
        }
      }
    }
  }
`;