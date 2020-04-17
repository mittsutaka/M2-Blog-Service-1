import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { BlogDataQuery } from "../../types/graphql-types";
import Layout from "../components/layout";

const contents = css({
  maxWidth: 800,
  margin: "0 auto",
  P: {
    fontSize: 18,
    lineHeight: 2,
  },
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 22,
    borderBottom: "1.5px solid lightgray",
    marginBottom: 10,
    marginTop: 50
  },
  pre: {
    marginTop: 0
  },
  a:{
    wordBreak:"break-all"
  }
})

interface Props {
  data: BlogDataQuery
}

const Date = styled.span({
  fontFamily: "Vollkorn , serif",
  fontWeight:"bold"
})

const Blog: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div css={contents}>
        <Date>{data.markdownRemark.frontmatter.date}</Date>
      </div>
      <div css={contents} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
      </div>
    </Layout>
  )
}

export default Blog;

export const query = graphql`
  query BlogData($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        category
      }
    }
  }
`