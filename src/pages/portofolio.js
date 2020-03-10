import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import ViewListIcon from "@material-ui/icons/ViewList"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import WebIcon from "@material-ui/icons/Web"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Button from "@material-ui/core/Button"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Layout from "../components/layout"
import "./portofolio.css"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    //maxWidth: 500,
  },
})

const myPortofolio = [
  {
    title: "Nasim Ramsar",
    desc:
      "Nasim Ramsar is an Educational Institue Website. They can add, change or remove their course and teachers, write news or article. also have a contact and gallery page.",
    tech: "Laravel (Php) framework and Mysql database",
    type: "website",
    role: "design, develop and support",
    pic: "/images/portfolio/nasimramsar.png",
    link: "http://Nasimramsar.com/",
  },
  {
    title: "Qazvin Coffee",
    desc:
      "Qazvin Coffee is an e-commerce website for selling food and drink focus on coffee and chocolate. This website has an admin panel to add, remove or change products and product categories. also have a shopping cart, invoice, factor page and contact with the client by SMS.",
    tech: ".net core (C#) framework and sql server database",
    type: "website",
    role: "design and develop",
    pic: "/images/portfolio/qazvincoffee.png",
    link: "https://www.QazvinCoffee.com/",
  },
  {
    title: "Ayegh Sanat Khazar",
    desc:
      "This project is Ayegh-Sanat-Khazar Company's website. they can add, remove and change in news and product. also have a gallery of images and sliders on the main page.",
    tech: "Laravel (Php) framework and Mysql database",
    type: "website",
    role: "design, develop and support",
    pic: "/images/portfolio/ayegh.png",
    link: "https://www.ayeghsanatkhazar.com/",
  },
  {
    title: "Villaayab",
    desc:
      "Villaayab is a website for renting villa and hotels. registration or login with SMS or, email and password. have a shopping cart and payment gateway for renting and paying money. have different dashboards and pages for different roles such as admin, client supports, accountants and host managers.",
    tech: ".net core (C#) framework and sql server database",
    type: "website",
    role: "design and develop",
    pic: "/images/portfolio/villaayab.png",
    link: "https://www.Villaayab.com/",
  },
  {
    title: "Omid Shiroudi",
    desc:
      "That was a personal website for a local famous artist Mr. Shiroudi. this site had a gallery, news, music and video page that can manage from the admin panel completely. unfortunately, after a while the owner decides to change the website.",
    tech: "Laravel (Php) framework and Mysql database",
    type: "website",
    role: "design and develop",
    pic: "/images/portfolio/shiroudi.png",
    link: "https://www.omidshiroudi.ir/",
  },
  {
    title: "Apdr",
    desc:
      "That is our company website. The main page is a solid html5 single page. but use the server for contact with our test app on our website via API.",
    tech: "Laravel (Php) framework and Mysql database",
    type: "website",
    role: "develop",
    pic: "/images/portfolio/apdr.png",
    link: "https://www.apdr.ir/",
  },
  {
    title: "magic light",
    desc:
      "Magic light is our game developer team homepage website. this webpage helps us to introduce our games and connect us to other people who love making or playing games.",
    tech: "static website with html5",
    type: "website",
    role: "develop",
    pic: "/images/portfolio/magiclight.png",
    link: "https://www.magiclight.ir",
  },
  {
    title: "mohsen shabanian",
    desc: "my home page website.",
    tech: "static website with gatsbyjs",
    type: "website",
    role: "design and develop",
    pic: "/images/portfolio/mohsenshabanian.png",
    link: "https://mohsenshabanian.com",
  },

  {
    title: "Noonap",
    desc:
      "noonap is a pwa (proggresive web application) for order or buy some foods or drink. you can choose product category and market for buying diffrence products. also you can pay online and choose deliver time.",
    tech: "reactjs app using api",
    type: "webapp",
    role: "design and develop",
    pic: "/images/portfolio/noon.png",
    link: "https://noonap.ir",
  },
  {
    title: "Dalan Danj",
    desc:
      "Dalan Gang isa little game and  our first experience for making game. that made in only two days for a GameJam.",
    tech: "html5 and javascript",
    type: "game",
    role: "developer",
    pic: "/images/portfolio/dalangang.png",
    link: "https://magic-light-team.github.io/Dalan-e-Ganj/",
  },
  {
    title: "Pesarak",
    desc:
      "Pesarak is a little game about on day of a boy and what he can choose in his life.",
    tech: "reactjs",
    type: "game",
    role: "developer",
    pic: "/images/portfolio/pesarak.png",
    link: "https://magic-light-team.github.io/Pesarak/",
  },
  {
    title: "Ot",
    desc:
      "Ot is a story teller game. the story behind the game, came from true stories about autism.",
    tech: "reactjs",
    type: "game",
    role: "developer",
    pic: "/images/portfolio/ot.png",
    link: "https://magic-light-team.github.io/ot/",
  },
]

export default () => {
  const classes = useStyles()

  const [tabValue, setTabValue] = React.useState(0)
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue)
    switch (newValue) {
      case 0:
        setPortofolio(myPortofolio)
        break
      case 1:
        setPortofolio(myPortofolio.filter(p => p.type === "website"))
        break
      case 2:
        setPortofolio(myPortofolio.filter(p => p.type === "webapp"))
        break
      case 3:
        setPortofolio(myPortofolio.filter(p => p.type === "game"))
        break
      default:
        setPortofolio(myPortofolio)
        break
    }
  }

  // randomize Portofolio
  let currentIndex = myPortofolio.length
  let tempValue = 0
  let randomIndex = 0
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    tempValue = myPortofolio[currentIndex]
    myPortofolio[currentIndex] = myPortofolio[randomIndex]
    myPortofolio[randomIndex] = tempValue
  }
  const [portofolio, setPortofolio] = React.useState(myPortofolio)

  const handlePortofolioClick = p => {
    setOpenModal(true)
    setSelectedPortofolio(p)
  }
  const handleCloseDialog = value => {
    setOpenModal(false)
  }
  const [openModal, setOpenModal] = React.useState(false)
  const [selectedPortofolio, setSelectedPortofolio] = React.useState({})
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Layout>
      <Paper square className={classes.root}>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<ViewListIcon />} label="All" aria-label="All" />
          <Tab icon={<WebIcon />} label="Website" aria-label="Website" />
          <Tab
            icon={<DesktopWindowsIcon />}
            label="Webapp"
            aria-label="Webapp"
          />
          <Tab icon={<SportsEsportsIcon />} label="Game" aria-label="Game" />
        </Tabs>
      </Paper>
      <Paper className="portofolio-item-well">
        <GridList>
          {portofolio.map(p => (
            <GridListTile className="portofolio-item" key={p.title}>
              <img src={p.pic} alt={p.title} />
              <GridListTileBar
                title={p.title}
                subtitle={"technology: " + p.tech}
                className="gridListTileBar"
                onClick={() => handlePortofolioClick(p)}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${p.title}`}
                    className="gridListIcon"
                  >
                    {p.type === "website" ? (
                      <WebIcon />
                    ) : p.type === "webapp" ? (
                      <DesktopWindowsIcon />
                    ) : (
                      <SportsEsportsIcon />
                    )}
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>

      <Dialog
        aria-labelledby="single-portofolio-dialog"
        open={openModal}
        onClose={handleCloseDialog}
        fullScreen={fullScreen}
      >
        <DialogTitle id="simple-dialog-title">
          <DialogTitle id="alert-dialog-title">
            {selectedPortofolio.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <strong>Project Type:</strong> {selectedPortofolio.type}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              <strong>Technology:</strong> {selectedPortofolio.tech}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              <strong>Description:</strong> {selectedPortofolio.desc}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              <strong>role in progect:</strong> {selectedPortofolio.role}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              <a href={selectedPortofolio.link}>See Project</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              close
            </Button>
          </DialogActions>
        </DialogTitle>
      </Dialog>
    </Layout>
  )
}
