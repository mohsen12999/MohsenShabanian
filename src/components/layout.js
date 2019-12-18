import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import ArtTrackIcon from "@material-ui/icons/ArtTrack"
import BurstModeIcon from "@material-ui/icons/BurstMode"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import GetAppIcon from "@material-ui/icons/GetApp"
import Tooltip from "@material-ui/core/Tooltip"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      //width: `calc(100% - ${drawerWidth}px)`,
      //marginLeft: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundImage: 'url("/images/bg/desk-computer (6).jpg")',
    height: "100vh",
    backgroundSize: "cover",
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  links: {
    textDecoration: "None",
    color: "inherit",
  },
}))

const Layout = ({ container, children }) => {
  // const { container } = props;
  // const { children } = props;
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link className={classes.links} to="/">
          <Tooltip title="Home Page" aria-label="home" arrow>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Tooltip>
        </Link>
        <Link className={classes.links} to="/about">
          <Tooltip title="About Page" aria-label="about" arrow>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
          </Tooltip>
        </Link>
        <Link className={classes.links} to="/resume">
          <Tooltip title="Resume Page" aria-label="resume" arrow>
            <ListItem button>
              <ListItemIcon>
                <ArtTrackIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Resume"} />
            </ListItem>
          </Tooltip>
        </Link>
        <Link className={classes.links} to="/portofolio">
          <Tooltip title="Portofolio Page" aria-label="portofolio" arrow>
            <ListItem button>
              <ListItemIcon>
                <BurstModeIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Portofolio"} />
            </ListItem>
          </Tooltip>
        </Link>
        <Link className={classes.links} to="/blogs">
          <Tooltip title="Blogs List Page" aria-label="blogs" arrow>
            <ListItem button>
              <ListItemIcon>
                <LibraryBooksIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Blogs"} />
            </ListItem>
          </Tooltip>
        </Link>
        <Link className={classes.links} to="/contact">
          <Tooltip title="Contact Page" aria-label="contact" arrow>
            <ListItem button>
              <ListItemIcon>
                <ContactMailIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItem>
          </Tooltip>
        </Link>
      </List>

      <Divider />

      <List>
        <a className={classes.links} href="https://twitter.com/mohsen1299">
          <Tooltip title="Twitter Home Page" aria-label="twitter" arrow>
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"@mohsen1299"} />
            </ListItem>
          </Tooltip>
        </a>
        <a className={classes.links} href="https://www.linkedin.com/in/mohsen-shabanian-8869b478/">
          <Tooltip title="Linkdin Home Page" aria-label="linkdin" arrow>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"@mohsen-shabanian"} />
            </ListItem>
          </Tooltip>
        </a>
        <a className={classes.links} href="https://www.instagram.com/mohsen_1299/">
          <Tooltip title="Instagram Home Page" aria-label="instagram" arrow>
            <ListItem button>
              <ListItemIcon>
                <InstagramIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"@mohsen_1299"} />
            </ListItem>
          </Tooltip>
        </a>
        <a className={classes.links} href="https://www.facebook.com/MohsenShabanian">
          <Tooltip title="Facebook Home Page" aria-label="facebook" arrow>
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"@mohsenshabanian"} />
            </ListItem>
          </Tooltip>
        </a>
      </List>

      <Divider />

      <List>
        <a className={classes.links} href="/file/MohsenShabanian.pdf" download>
          <Tooltip title="Download Resume File" aria-label="resume" arrow>
            <ListItem button>
              <ListItemIcon>
                <GetAppIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"resume"} />
            </ListItem>
          </Tooltip>
        </a>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            className={classes.avatar}
            alt="Mohsen Shabanian"
            src="/images/me.png"
          />
          <Typography variant="h6" noWrap>
            Mohsen Shabanian
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        {/* <Typography paragraph>{children}</Typography> */}
      </main>
    </div>
  )
}

export default Layout
