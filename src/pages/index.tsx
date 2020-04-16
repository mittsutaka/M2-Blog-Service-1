import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexTestQuery } from "../../types/graphql-types";
import Blog from "../templates/blog";
import Card from "../components/card";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

interface Props {
  data: IndexTestQuery
}

const linkCss = css({
  textDecoration: "none",
  "&:active": {
    color: "inherit"
  }
})

const Latest = styled.div({
  display:"flex",
  overflow:"auto",
  paddingBottom:15
})

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Latest>
        <Link css={linkCss} to="/blogs/gatsby/first">
          <Card blogTitle="Gatsbyを使ってみた.かなりいい感じである"></Card>
        </Link>
        <Link css={linkCss} to="/blogs/game/first">
          <Card blogTitle="index"></Card>
        </Link>
      </Latest>
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
