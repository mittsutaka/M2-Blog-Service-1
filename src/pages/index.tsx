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
            let fixedData = data.logoFiles.edges[0].node.fixed;
            return (
              <Card
                key={index}
                blogTitle={edge.node.frontmatter.title}
                link={edge.node.fields.slug}
                category={edge.node.frontmatter.category}
                fixed={fixedData}
                date={edge.node.frontmatter.date}
              />
            )
          })
        }
      </Section>
      <Label labelName="Pick Up" />
      <Section>
        {
          data.allMarkdownRemark.edges.map((edge, index) => {
            let fixedData = data.logoFiles.edges[1].node.fixed;
            return (
              <Card
              key={index}
              blogTitle={edge.node.frontmatter.title}
              link={edge.node.fields.slug}
              category={edge.node.frontmatter.category}
              fixed={fixedData}
              date={edge.node.frontmatter.date}
            />
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
  allMarkdownRemark(
    limit:10
    sort: {fields: frontmatter___date, order: DESC}
    ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          description
          category
        }
      }
    }
  }
  logoFiles:allImageSharp{
    edges {
      node {
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
`
