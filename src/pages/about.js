import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMap } from "@fortawesome/free-solid-svg-icons"
import LanguageIcon from "@material-ui/icons/Language"
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"

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
      <div className="my-servises">
        <div className="service-item">
          <Typography
            className="service-title"
            variant="h5"
            component="h5"
            gutterBottom
          >
            <span>Making Website</span>
          </Typography>
          <Typography
            className="service-desc"
            variant="p"
            component="p"
            gutterBottom
          >
            <span> -- </span>
          </Typography>
        </div>

        <div className="service-item">
          <Typography
            className="service-title"
            variant="h5"
            component="h5"
            gutterBottom
          >
            <span>Making Web-App</span>
          </Typography>
          <Typography
            className="service-desc"
            variant="p"
            component="p"
            gutterBottom
          >
            <span> -- </span>
          </Typography>
        </div>

        <div className="service-item">
          <Typography
            className="service-title"
            variant="h5"
            component="h5"
            gutterBottom
          >
            <span>Making Native App</span>
          </Typography>
          <Typography
            className="service-desc"
            variant="p"
            component="p"
            gutterBottom
          >
            <span> -- </span>
          </Typography>
        </div>

        <div className="service-item">
          <Typography
            className="service-title"
            variant="h5"
            component="h5"
            gutterBottom
          >
            <span>Supports App</span>
          </Typography>
          <Typography
            className="service-desc"
            variant="p"
            component="p"
            gutterBottom
          >
            <span> -- </span>
          </Typography>
        </div>
      </div>
      <Typography
        className="main_title"
        variant="h4"
        component="h4"
        gutterBottom
      >
        <span>My Interests</span>
      </Typography>
      <Paper className="paper-card">
        video Game, Movie, Music, Reading Book, Photo, Walking
      </Paper>
    </Layout>
  )
}
