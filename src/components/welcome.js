import React from "react"
import { graphql } from "gatsby"

const Welcome = ({ data }) => {
    return(
    <div>{data.allMarkdownRemark.edges.map(({node})=>(
        <p>{node.excerpt}</p>
    )
       
    )}</div>
    
    
)}

export const query = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`

export default Welcome