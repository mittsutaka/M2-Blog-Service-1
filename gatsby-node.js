const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)
  // ブログページを作る
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let relativePath = (node.fields.slug).slice(1) + "logo.png";
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog.tsx`),
      context: {
        slug: node.fields.slug,
        rPath: relativePath,
      },
    })
  })

  //カテゴリページを作る
  let categories = [];
  result.data.allMarkdownRemark.edges.forEach((edge) => categories.push(edge.node.frontmatter.category));
  categories.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  categories.map((name) => {
    createPage({
      path: `Category/${name}`,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        name:name
      }
    })
  })

}