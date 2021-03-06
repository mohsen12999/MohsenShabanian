import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LanguageIcon from "@material-ui/icons/Language"
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import {
  faMap,
  faGlobe,
  faHeadset,
  faGamepad,
  faFilm,
  faMusic,
  faCamera,
  faWalking,
  faSuitcase,
  faTruckPickup,
} from "@fortawesome/free-solid-svg-icons"
import { faWindows, faAndroid } from "@fortawesome/free-brands-svg-icons"
import Chip from "@material-ui/core/Chip"

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
      <Paper className="paper-card">
        <div className="my-flex-card">
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
              students' projects at university. My first real job was working
              for a year for a company as a developer and support software
              products. between that making some little project for fun beside
              my original none technical job. In these years, I’m working alone
              as a freelancer or as a member of a temporary team for big
              contracts.
            </Typography>
            <Typography component="p">
              I liked to learn new concepts, technology, and tools, and accept
              new challenges. I enjoy being a member of teams for making new
              stuff.
            </Typography>
          </div>
        </div>
        <div className="ability-card">
          <div className="ability-item">
            <LanguageIcon fontSize="large" />
            <span>
              <h3>Web Developer</h3>
              <p>Develop and Support</p>
            </span>
          </div>
          <div className="ability-item">
            <OfflineBoltIcon fontSize="large" />
            <span>
              <h3>Electrical Engineer</h3>
              <p>Design, Make & Program</p>
            </span>
          </div>
          <div className="ability-item">
            <SportsEsportsIcon fontSize="large" />
            <span>
              <h3>Video Game</h3>
              <p>Develop and Playing</p>
            </span>
          </div>
          <div className="ability-item">
            <SupervisorAccountIcon fontSize="large" />
            <span>
              <h3>MBA Degree</h3>
              <p>Learn and Practice</p>
            </span>
          </div>
        </div>
      </Paper>
      <Typography
        className="main_title"
        variant="h4"
        component="h4"
        gutterBottom
      >
        <span>My Services</span>
      </Typography>

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item md={6} xs={12}>
            <Paper className="service-item">
              <div className="service-icon-span">
                <FontAwesomeIcon icon={faGlobe} className="service-icon" />
              </div>
              <Typography
                className="service-title"
                variant="h6"
                component="h6"
                gutterBottom
              >
                <span>Make Website</span>
              </Typography>
              <Typography
                className="service-desc"
                variant="p"
                component="p"
                gutterBottom
              >
                Making e-commerce, company website, or blog with your custom
                design, content, and administrator system. change and add tools
                and utility that you need. Using .Net (c# lang.) or Laravel (Php
                lang.) or Other frameworks.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className="service-item">
              <div className="service-icon-span">
                <FontAwesomeIcon icon={faWindows} className="service-icon" />
              </div>
              <Typography
                className="service-title"
                variant="h6"
                component="h6"
                gutterBottom
              >
                <span>Develop Web-App</span>
              </Typography>
              <Typography
                className="service-desc"
                variant="p"
                component="p"
                gutterBottom
              >
                Develop Web-based applications such as office automation,
                accounting. Making web-based apps (such as React-Native) or PWA
                (Progressive Web App) for android or ios. Using SQL (like
                sql-server or MySQL)r or NoSql Database (like MongoDB or
                Postgres).
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item md={6} xs={12}>
            <Paper className="service-item">
              <div className="service-icon-span">
                <FontAwesomeIcon icon={faAndroid} className="service-icon" />
              </div>
              <FontAwesomeIcon />
              <Typography
                className="service-title"
                variant="h6"
                component="h6"
                gutterBottom
              >
                <span>Native App</span>
              </Typography>
              <Typography
                className="service-desc"
                variant="p"
                component="p"
                gutterBottom
              >
                Making Windows application with visual studio and c#. Make a
                simple Android application with Android studio and java.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className="service-item">
              <div className="service-icon-span">
                <FontAwesomeIcon icon={faHeadset} className="service-icon" />
              </div>
              <Typography
                className="service-title"
                variant="h6"
                component="h6"
                gutterBottom
              >
                <span>Support Apps</span>
              </Typography>
              <Typography
                className="service-desc"
                variant="p"
                component="p"
                gutterBottom
              >
                Support and consultant about applications whenever you need them
                and as soon as possible. Add new components or tools for your
                application or website.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Typography
        className="main_title"
        variant="h4"
        component="h4"
        gutterBottom
      >
        <span>My Interests</span>
      </Typography>
      <Paper className="my-interest-card">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item className="my-interest-item">
            <Chip
              label="Video Game"
              icon={<FontAwesomeIcon icon={faGamepad} />}
            />
          </Grid>
          <Grid item className="my-interest-item">
            <Chip label="Movie" icon={<FontAwesomeIcon icon={faFilm} />} />
          </Grid>
          <Grid item className="my-interest-item">
            <Chip label="Music" icon={<FontAwesomeIcon icon={faMusic} />} />
          </Grid>
          <Grid item className="my-interest-item">
            <Chip label="Photo" icon={<FontAwesomeIcon icon={faCamera} />} />
          </Grid>
          <Grid item className="my-interest-item">
            <Chip label="Walking" icon={<FontAwesomeIcon icon={faWalking} />} />
          </Grid>
          <Grid item className="my-interest-item">
            <Chip label="Travel" icon={<FontAwesomeIcon icon={faSuitcase} />} />
          </Grid>
          <Grid item className="my-interest-item">
            <Chip
              label="Cars"
              icon={<FontAwesomeIcon icon={faTruckPickup} />}
            />
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  )
}
