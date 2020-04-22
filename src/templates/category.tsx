import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { CategoryDataQuery } from "../../types/graphql-types";
import Layout from "../components/layout";
import Label from "../components/label";
import Card from "../components/card";

interface Props {
  data: CategoryDataQuery
}

const Section = styled.div({
  display: "flex",
  overflow: "auto",
  padding: 5,
  marginBottom: 50,
})

const Category: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
      <Label labelName={data.sitePage.context.name} />
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
      </div>
    </Layout>
  )
}

export default Category;

export const query = graphql`
  query CategoryData($name: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: $name}}},
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
    logoFiles:allFile(
      filter: {name: {eq: "logo"}}
      )
      {
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
    sitePage(context:{name:{eq:$name}}) {
      id
      context {
        name
      }
    } 
  }
`