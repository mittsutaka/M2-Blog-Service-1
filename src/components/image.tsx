import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageQuery } from "../../types/graphql-types";
import Img from 'gatsby-image';

interface Props {
  name?: string,
}

const Image: React.FC<Props> = (props) => {
  const data: ImageQuery = useStaticQuery(
    graphql`
    query Image{
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            relativePath
            publicURL
            sourceInstanceName
            childImageSharp {
              id
              fixed (width: 200,height:200){
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
  )
  const edge = data.allFile.edges.find(edge => edge.node.relativePath == props.name);
  return (
    <Img fixed={edge.node.childImageSharp.fixed} />
  )
}

export default Image;