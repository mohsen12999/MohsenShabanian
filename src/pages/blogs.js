import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <div>Hello world!</div>
      <h4>Total Post: {data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
