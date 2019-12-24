import React from "react"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import "./resume.css"

export default () => (
  <Layout>
    <Typography className="main_title" variant="h4" component="h4" gutterBottom>
      <span>Resume</span>
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography
          className="experience_title"
          variant="h5"
          component="h5"
          gutterBottom
        >
          <span>Experience</span>
        </Typography>
        <Paper className="">xs</Paper>
        <Paper className="">xs</Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography
          className="education_title"
          variant="h5"
          component="h5"
          gutterBottom
        >
          <span>Education</span>
        </Typography>
        <Paper className="">xs</Paper>
        <Paper className="">xs</Paper>
      </Grid>
    </Grid>
  </Layout>
)
