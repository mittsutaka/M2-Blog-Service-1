import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { BlogDataQuery } from "../../types/graphql-types";
import Layout from "../components/layout";
import SEO from "../components/SEO";

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
  a: {
    wordBreak: "break-all"
  },
  ul: {
    paddingLeft: 30
  },
  img: {
    width: "100%"
  },
  "@media (max-width: 600px)": {
    P: {
      fontSize: 14,
      lineHeight: 2,
    },
    h1: {
      fontSize: 18,
    },
    h2: {
      fontSize: 16,
      borderBottom: "1px solid lightgray",
      marginBottom: 10,
      marginTop: 50
    },
    pre: {
      fontSize: 14
    }
  }
})

interface Props {
  data: BlogDataQuery
}

const Date = styled.span({
  fontFamily: "Vollkorn , serif",
  fontWeight: "bold"
})

const Blog: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} desc={data.markdownRemark.frontmatter.description} />
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