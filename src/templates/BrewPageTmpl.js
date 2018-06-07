import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

export default class BrewPageTmpl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=2").then(res => {
      const users = res.data.results.map(obj => obj);
      this.setState({ users });
    });
  }

  render() {
    const { data } = this.props;
    const LikesWrapper = styled.div`
      min-height: 200px;
      background-image: url(${data.markdownRemark.frontmatter.image});
      background-size: 600px;
    `;
    return (
      <article>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <h5>{data.markdownRemark.frontmatter.subtitle}</h5>
        <LikesWrapper>
          <h3>Who like this beer?</h3>
          <ul>
            {this.state.users.map(user => {
              return (
                <li key={user.id.value}>
                  {user.name.first} {user.name.last}
                </li>
              );
            })}
          </ul>
        </LikesWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
        <span>{data.markdownRemark.frontmatter.date}</span>
      </article>
    );
  }
}

export const query = graphql`
  query BrewQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        image
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;
