import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexTestQuery } from "../../types/graphql-types";

interface Props {
  data: IndexTestQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      <h1>{node.frontmatter.title}</h1>
      <p>{node.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{__html:node.html}}></div>
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
