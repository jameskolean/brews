/* @meta
layout: brew
*/
import React from "react";
import Link from "gatsby-link";
import BrewListing from "../components/brew/brew-listing";

const BrewsPage = ({ data }) => (
  <div>
    <h2>Brews</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BrewListing key={node.id} brew={node} />
    ))}
  </div>
);

export default BrewsPage;

export const query = graphql`
  query BrewMeta {
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
            thumbnail
            image
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt
        }
      }
    }
  }
`;
