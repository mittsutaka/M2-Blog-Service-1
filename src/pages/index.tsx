import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexTestQuery } from "../../types/graphql-types";
import Card from "../components/card";
import Form from "../components/form";
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
            let file = data.logoFiles.edges.find(t => `/${t.node.relativePath}` == `${edge.node.fields.slug}logo.png`);
            let fixedData = file.node.childImageSharp.fixed;
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
            let file = data.logoFiles.edges.find(t => `/${t.node.relativePath}` == `${edge.node.fields.slug}logo.png`);
            let fixedData = file.node.childImageSharp.fixed;
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
      <Label labelName="Contact Me" />
      <Form />
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
  logoFiles:allFile(filter: {name: {eq: "logo"}}){
    edges {
      node {
        id
        relativePath
        childImageSharp{
          fixed(width: 280, height: 210) {
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
