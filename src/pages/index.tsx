import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexTestQuery } from "../../types/graphql-types";
import Card from "../components/card";
import styled from "@emotion/styled";
import Label from "../components/label";
import { css } from "@emotion/core";

interface Props {
  data: IndexTestQuery
}

const Section = styled.div({
  display: "flex",
  overflow: "auto",
  padding: 5,
  marginBottom: 50,
})

const CategorySectionStyle = css({
  flexWrap: "wrap",
  paddingTop: 30
})

const CategoryCircle = styled.div({
  borderRadius: "50%",
  width: 150,
  height: 150,
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  textAlign: "center",
  lineHeight: "150px",
  margin: "10px 20px",
  a: {
    fontSize: 22,
    textDecoration: "none",
    color: "#fff",
    width: "100%",
    height: "100%"
  },
  "&:hover": {
    boxShadow: "0 0 5px #000"
  },
  "@media (max-width: 800px)": {
    width: 75,
    height: 75,
    lineHeight: "75px",
    a: {
      fontSize: 16
    }
  }
})

const IndexPage: React.FC<Props> = ({ data }) => {
  let categories: string[] = [];
  let categoryLabel = `Category (All：${data.allMarkdownRemark.totalCount})`;
  data.allMarkdownRemark.edges.forEach((edge) => {
    if (!categories.includes(edge.node.frontmatter.category)) {
      categories.push(edge.node.frontmatter.category)
    }
  });
  return (
    <Layout>
      <Label labelName="New Posts" />
      <Section>
        {
          data.allMarkdownRemark.edges.map((edge, index) => {
            if (index >= 10) return;
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
            if (index % 3 != 1 || index > 30) return;
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
      <Label labelName={categoryLabel} />
      <Section id="category" css={CategorySectionStyle}>
        {
          categories.map((name, index) => {
            return (
              <CategoryCircle key={index}>
                <Link to={`/Category/${name}`}>
                  {name}
                </Link>
              </CategoryCircle>
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
    sort: {fields: frontmatter___date, order: DESC}
    ) {
    totalCount
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
