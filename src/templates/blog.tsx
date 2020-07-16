import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { BlogDataQuery } from "../../types/graphql-types";
import Layout from "../components/layout";

const contents = css({
  maxWidth: 1000,
  margin: "0 auto",
  P: {
    fontSize: 16,
    lineHeight: 2,
    whiteSpace:"pre-wrap",
    padding:"0 15px",
  },
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 50,
    backgroundColor:"#5C6B80",
    padding:"15px",
    color:"floralwhite",
    fontWeight:"normal",
    borderRadius:"8px"
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
  li:{
    lineHeight:2
  },
  img: {
    maxWidth: "100%",
    padding: "10px 10px 30px 10px"
  },
  blockquote:{
    borderLeft:"2px solid lightgray",
    paddingLeft:10,
    marginBottom:5,
    p:{
      lineHeight:1.5,
      color:"darkgreen",
      fontStyle:"italic",
      fontSize:14
    }
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
    },
    li:{
      fontSize:14
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
    <Layout title={data.markdownRemark.frontmatter.title} desc={data.markdownRemark.frontmatter.description} article={true} banner={data.file.publicURL}>
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
  query BlogData($slug: String!,$rPath:String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        category
        tags
      }
      tableOfContents
    }
    file(relativePath: {eq: $rPath}) {
      publicURL
    }
  }
`