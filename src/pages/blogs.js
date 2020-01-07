import React from "react"
import { graphql } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Typography
        className="main_title"
        variant="h4"
        component="h4"
        gutterBottom
      >
        <span>Blogs</span>
      </Typography>

      <Paper></Paper>

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
    </Layout>
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
