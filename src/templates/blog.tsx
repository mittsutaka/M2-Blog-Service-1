import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { BlogDataQuery } from "../../types/graphql-types";
import Layout from "../components/layout";

const contents = css({
    P: {
        marginTop: 40,
    }
})

interface Props {
    data: BlogDataQuery
}

const Blog: React.FC<Props> = ({ data }) => {
    return (
        <Layout>
            <div css={contents} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
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
      }
    }
  }
`