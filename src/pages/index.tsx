import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexTestQuery } from "../../types/graphql-types";
import Card from "../components/card";

import styled from "@emotion/styled";
import Label from "../components/label";


interface Props {
  data: IndexTestQuery
}

const Section = styled.div({
  display: "flex",
  overflow: "auto",
  padding: 5,
  marginBottom: 50,
})

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Label labelName="New Posts" />
      <Section>
        {
          data.allMarkdownRemark.edges.map((edge, index) => {
            let fixedData = data.logoFiles.edges[1].node.childImageSharp.fixed;
            if (fixedData == null) {
              let ed = data.logoFiles.edges.find(t => t.node.childImageSharp.fixed.originalName == "first.png");
              fixedData = ed.node.childImageSharp.fixed;
            }
            return (
              <Card key={index} blogTitle={edge.node.frontmatter.title} link={edge.node.fields.slug} category={edge.node.frontmatter.category} fixed={fixedData} />
            )
          })
        }
      </Section>
      <Label labelName="Pick Up" />
      <Section>
        {
          data.allMarkdownRemark.edges.map((edge, index) => {
            let fixedData = data.logoFiles.edges[1].node.childImageSharp.fixed;
            if (fixedData == null) {
              let ed = data.logoFiles.edges.find(t => t.node.childImageSharp.fixed.originalName == "first.png");
              fixedData = ed.node.childImageSharp.fixed;
            }
            return (
              <Card key={index} blogTitle={edge.node.frontmatter.title} link={edge.node.fields.slug} category={edge.node.frontmatter.category} fixed={fixedData} />
            )
          })
        }
      </Section>
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
        fields {
          slug
        }
        frontmatter {
          title
          date
          description
          category
        }
      }
    }
  }
  logoFiles:allFile {
    edges {
      node {
        id
        childImageSharp {
          id
          fixed(width: 300, height: 300) {
            base64
            width
            height
            src
            srcSet
            originalName
          }
        }
      }
    }
  }
}
`
