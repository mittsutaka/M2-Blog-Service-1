import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { NotFoundQuery } from "../../types/graphql-types";

interface INotFoundProps {
  data: NotFoundQuery,
  location: string
}

const NotFoundPage: React.FC<INotFoundProps> = ({ data }) => {

  return (
    // <Layout>
    <div>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    {/* </Layout> */ }
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound{
    site {
      siteMetadata {
        title
      }
    }
  }
`
