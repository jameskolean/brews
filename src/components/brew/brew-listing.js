import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  img {
    width: 90px;
    padding: 10px;
  }
`;

const BrewListing = ({ brew }) => (
  <article>
    <hr />
    <h4>
      <Link to={brew.fields.slug}>{brew.frontmatter.title}</Link>
    </h4>
    <DetailWrapper>
      <img src={brew.frontmatter.thumbnail} />
      <div>
        <h5>{brew.frontmatter.subtitle}</h5>
        <p>{brew.excerpt}</p>
      </div>
    </DetailWrapper>
  </article>
);

export default BrewListing;
