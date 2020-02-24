import React from "react"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import SchoolIcon from "@material-ui/icons/School"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import EventNoteIcon from "@material-ui/icons/EventNote"
import LinearProgress from "@material-ui/core/LinearProgress"
import CircularProgress from "@material-ui/core/CircularProgress"

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
          <BusinessCenterIcon fontSize="large" />
          <span>Experience</span>
        </Typography>
        <ul className="timeline">
          <li>
            <Paper className="timeline-paper">
              <Typography variant="h5" component="h3">
                Apdr
              </Typography>
              <Typography className="time" variant="small">
                <EventNoteIcon fontSize="small" />
                <span>2017 - 2018</span>
              </Typography>
              <Typography component="p">
                Found and Work as CEO and a programmer. Develop some website
                projects and other projects.
              </Typography>
            </Paper>
          </li>
          <li>
            <Paper className="timeline-paper">
              <Typography variant="h6" component="h3">
                Amard
              </Typography>
              <Typography className="time" variant="small">
                <EventNoteIcon fontSize="small" />
                <span>2016 - 2017</span>
              </Typography>
              <Typography component="p">
                Working as a web application developer in the .Net framework
                with c#. Develop and support multiple websites, and web
                applications such as accounting and automation systems for big
                companies.
              </Typography>
            </Paper>
          </li>
          <li>
            <Paper className="timeline-paper">
              <Typography variant="h6" component="h3">
                Self-employed
              </Typography>
              <Typography className="time" variant="small">
                <EventNoteIcon fontSize="small" />
                <span>2014 - 2016</span>
              </Typography>
              <Typography component="p">
                Working as a freelancer and making little application for
                windows with c#. Design and develop some little project with
                microcontrollers and other ICs.
              </Typography>
            </Paper>
          </li>
        </ul>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography
          className="education_title"
          variant="h6"
          component="h6"
          gutterBottom
        >
          <SchoolIcon fontSize="large" />
          <span>Education</span>
        </Typography>
        <ul className="timeline">
          <li>
            <Paper className="timeline-paper">
              <Typography variant="h6" component="h3">
                Islamic Azad University,Science And Research Branch
              </Typography>
              <Typography className="time" variant="small">
                <EventNoteIcon fontSize="small" />
                <span>2011 - 2014</span>
              </Typography>
              <Typography className="study-field" component="p">
                Master of Business Administration (MBA)
              </Typography>
              <Typography component="p">
                Thesis on: Estimate electrical demand in residental area using
                genetic algorithm
              </Typography>
            </Paper>
          </li>
          <li>
            <Paper className="timeline-paper">
              <Typography variant="h6" component="h3">
                Qiau - Qazvin Islamic Azad University
              </Typography>
              <Typography className="time" variant="small">
                <EventNoteIcon fontSize="small" />
                <span>2005 - 2009</span>
              </Typography>
              <Typography className="study-field" component="p">
                Bachelor of Engineering on Electrical and Electronics
                Engineering
              </Typography>
              <Typography component="p">
                Thesis on: Controlling device via Sms
              </Typography>
            </Paper>
          </li>
          <li>
            <Paper className="timeline-paper">
              <Typography variant="h6" component="h3">
                Farid highschool
              </Typography>
              <Typography className="time" variant="small">
                <EventNoteIcon fontSize="small" />
                <span>2000 - 2004</span>
              </Typography>
              <Typography className="study-field" component="p">
                Mathematics and Statistics
              </Typography>
            </Paper>
          </li>
        </ul>
      </Grid>
    </Grid>

    <Typography className="main_title" variant="h4" component="h4" gutterBottom>
      <span>Skills</span>
    </Typography>
    <Paper>
      <Grid container spacing={2}>
        <Grid className="skill-column" item xs={12} md={6}>
          <div className="skill-row">
            <span className="skill-title">C#</span>
            <span className="skill-percent">70%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={70}
            />
          </div>
          <div className="skill-row">
            <span className="skill-title">Html & Css</span>
            <span className="skill-percent">65%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={65}
            />
          </div>

          <div className="skill-row">
            <span className="skill-title">Php</span>
            <span className="skill-percent">50%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={50}
            />
          </div>
          <div className="skill-row">
            <span className="skill-title">Javascript</span>
            <span className="skill-percent">45%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={45}
            />
          </div>
          <div className="skill-row">
            <span className="skill-title">Sql</span>
            <span className="skill-percent">40%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={40}
            />
          </div>
          <div className="skill-row">
            <span className="skill-title">Python</span>
            <span className="skill-percent">40%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={40}
            />
          </div>
          <div className="skill-row">
            <span className="skill-title">C/C++</span>
            <span className="skill-percent">40%</span>
            <LinearProgress
              className="skill-line"
              variant="determinate"
              value={40}
            />
          </div>
        </Grid>

        <Grid className="skill-column" item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Visual Studio
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">75%</div>
                    <CircularProgress variant="static" value={75} />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    VS Code
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">60%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={60}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Sql server
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">60%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={60}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    MySql
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">50%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={50}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Windows
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">75%</div>
                    <CircularProgress variant="static" value={75} />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Linux
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">40%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={30}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Git
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">50%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={50}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Android Studio
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">30%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={30}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid alignItems="center" container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="skill-title" component="h4">
                    Vim
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="skill-circle">
                    <div className="skill-percent">30%</div>
                    <CircularProgress
                      className="skill-circle-line"
                      variant="static"
                      value={30}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Layout>
)
