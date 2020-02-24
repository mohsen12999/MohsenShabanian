import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Paper } from "@material-ui/core"

import "./blogTemplate.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Paper className="paper-card">
        <div className="blog-post-container">
          <div className="image-div">
            <img src={frontmatter.img} alt={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <small>{frontmatter.date}</small>
          </div>
          <hr />
          <div className="blog-post">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Paper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        path
        img
      }
    }
  }
`
