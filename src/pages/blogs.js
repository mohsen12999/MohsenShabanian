import React from "react"
import { graphql } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import TodayIcon from "@material-ui/icons/Today"
import RecentActorsIcon from "@material-ui/icons/RecentActors"
import CategoryIcon from "@material-ui/icons/Category"

import Layout from "../components/layout"
import "./blogs.css"

export default ({ data }) => {
  // console.log(data)
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

      <Grid container spacing={2}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Grid key={node.id} item xs={12} md={4}>
            <Paper className="article-paper">
              <article>
                <figure className="article-figure">
                  <img
                    src={node.frontmatter.img}
                    alt={node.frontmatter.title}
                  />
                </figure>
                <div className="article-content">
                  <div className="article-title">
                    <a className="article-title" href={node.frontmatter.path}>
                      <Typography variant="h5" component="h5">
                        {node.frontmatter.title}
                      </Typography>
                    </a>
                    <div className="article-date">
                      <TodayIcon /> <span>{node.frontmatter.date}</span>
                    </div>
                    <ul className="article-meta">
                      <li className="article-author">
                        <RecentActorsIcon /> <span>Mohsen Sabanain</span>
                      </li>
                      <li className="article-ctegory">
                        <CategoryIcon /> <span>article</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* <h4>Total Post: {data.allMarkdownRemark.totalCount} Posts</h4> */}
    </Layout>
  )
}

// Todo: make class for persian blog
// Todo: Change article logo depend to category

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            img
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`
