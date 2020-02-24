import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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

    <Paper className="paper-card">
      <form
        action="https://formspree.io/engmohsenshabannian@gmail.com"
        method="POST"
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid className="input-grid" item xs={12} md={6}>
            <TextField
              className="input-text"
              label="Your Name"
              name="name"
              placeholder="John Dou"
              required
            />
          </Grid>

          <Grid className="input-grid" item xs={12} md={6}>
            <TextField
              className="input-text"
              label="Your Email"
              name="_replyto"
              placeholder="example@gmail.com"
              required
            />
          </Grid>

          <Grid className="input-grid" item xs={12}>
            <TextField
              className="input-text"
              label="Message"
              name="message"
              multiline
              rows="3"
              placeholder="write your message"
              required
            />
          </Grid>
          <Grid className="input-grid" item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>

    <Paper className="paper-card">
      <Grid container spacing={2}>
        <Grid className="info-grid" item xs={12} md={4}>
          <EmailIcon fontSize="large" />
          <a href="mailto:engmohsenshabanian@gmail.com">
            Eng.Mohsen.Shabanian@gmail.com
          </a>
          <span className="info-grid-desc">Email</span>
        </Grid>
        <Grid className="info-grid" item xs={12} md={4}>
          <MapIcon fontSize="large" />
          <address>Ramsar, Iran</address>
          <span className="info-grid-desc">Address</span>
        </Grid>
        <Grid className="info-grid" item xs={12} md={4}>
          <CallIcon fontSize="large" />
          <a href="tel:+989113923310">(+98)911 392 3310</a>
          <span className="info-grid-desc">Tel</span>
        </Grid>
      </Grid>
    </Paper>

    <Paper className="paper-card">
      <Grid className="grid-map" container spacing={2}>
        <iframe
          className="paper-map"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=50.563373565673835%2C36.8636907959613%2C50.68010330200196%2C36.98143783973302&amp;layer=mapnik"
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=13/36.9226/50.6217">
            View Larger Map
          </a>
        </small>
      </Grid>
    </Paper>
  </Layout>
)
