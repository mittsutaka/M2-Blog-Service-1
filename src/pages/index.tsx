import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexTestQuery } from "../../types/graphql-types";
import Blog from "../templates/blog";

interface Props {
  data: IndexTestQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {
        data.allMarkdownRemark.edges.map((edge) => {
          return (
            <Blog blogTitle={edge.node.frontmatter.title} description={edge.node.frontmatter.description} html={edge.node.html}></Blog>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
query IndexTest{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
        }
        html
      }
    }
  }
}
`
