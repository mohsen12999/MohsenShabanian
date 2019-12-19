import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMap } from "@fortawesome/free-solid-svg-icons"

import "./about.css"

export default () => {
  return (
    <Layout>
      <Typography
        className="main_title"
        variant="h4"
        component="h4"
        gutterBottom
      >
        <span>About Me</span>
      </Typography>
      <Paper className="my-flex-card">
        <div className="img">
          <img src="/images/me_big.jpg" alt="mohsen shabanian" />
        </div>
        <div className="desc">
          <Typography variant="h5" component="h3">
            Mohsen Shabanian
          </Typography>
          <Typography className="from-city" variant="small">
            <FontAwesomeIcon icon={faMap} /> <span>Ramsar, Iran</span>
          </Typography>
          <Typography component="p">
            Hello! I’m Mohsen Shabanian a self-study web developer with over
            five years of work experience. I started writing programs from
            students' projects at university. My first real job was working for
            a year for a company as a developer and support software products.
            between that making some little project for fun beside my original
            none technical job. In these years, I’m working alone as a
            freelancer or as a member of a temporary team for big contracts.
          </Typography>
          <Typography component="p">
            I liked to learn new concepts, technology, and tools, and accept new
            challenges. I enjoy being a member of teams for making new stuff.
          </Typography>
        </div>
      </Paper>
    </Layout>
  )
}
