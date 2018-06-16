const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const fm = require("./front-matter");
const fs = require("fs-extra");

exports.onCreatePage = async function({ page }) {
  const {
    attributes: { layout }
  } = fm(await fs.readFile(page.component, "utf8"));
  page.layout = layout || "index";
};
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const setNodeFields = (basePath, baseSlug) => {
    const slug = createFilePath({
      node,
      getNode,
      basePath: basePath
    });
    createNodeField({
      node,
      name: "slug",
      value: `/${baseSlug}${slug}`
    });
  };
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    setNodeFields("brew", "brews");
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                layout
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const layout = node.frontmatter.layout || "index";
        createPage({
          path: node.fields.slug,
          layout,
          component: path.resolve("./src/templates/BrewPageTmpl.js"),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
