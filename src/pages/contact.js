import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import EmailIcon from "@material-ui/icons/Email"
import MapIcon from "@material-ui/icons/Map"
import CallIcon from "@material-ui/icons/Call"

import Layout from "../components/layout"
import "./contact.css"

export default () => (
  <Layout>
    <Typography className="main_title" variant="h4" component="h4" gutterBottom>
      <span>Contact</span>
    </Typography>

    <Grid container spacing={2}>
      <Paper className="paper-card">
        <form
          action="https://formspree.io/engmohsenshabannian@gmail.com"
          method="POST"
        >
          <label>
            Your Name:
            <input type="text" name="name" />
          </label>
          <label>
            Your Email:
            <input type="email" name="_replyto" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <input type="submit" value="Send" />
        </form>
      </Paper>
    </Grid>

    <Grid container spacing={2}>
      <Grid className="info-grid" item xs={12} md={4}>
        <EmailIcon fontSize="large" />
        <span>Email</span>
        <a href="mailto:engmohsenshabanian@gmail.com">
          Eng.Mohsen.Shabanian@gmail.com
        </a>
      </Grid>
      <Grid className="info-grid" item xs={12} md={4}>
        <MapIcon fontSize="large" />
        <span>Address</span>
        <address>Ramsar, Iran</address>
      </Grid>
      <Grid className="info-grid" item xs={12} md={4}>
        <CallIcon fontSize="large" />
        <span>Tel</span>
        <a href="tel:+989113923310">(+98)911 392 3310</a>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      map
    </Grid>
  </Layout>
)
