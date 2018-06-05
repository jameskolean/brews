import React from "react";
import Link from "gatsby-link";

const BrewListing = ({ brew }) => (
  <article>
    <hr/>
    <h4>
      some link
      {/* <Link to={brew.fields.slug}>{brew.frontmatter.title}</Link> */}
    </h4>
    {/* <h5>{brew.frontmatter.subtitle}</h5>
    <p>{brew.excerpt}</p> */}
  </article>
);

export default BrewListing;
