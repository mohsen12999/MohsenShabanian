// import React from "react"
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const Layout = ({children}) =>(
//     <>
//     <AppBar position="static">
//         <Tabs >
//           <Tab label="Item One"  />
//           <Tab label="Item Two"  />
//           <Tab label="Item Three"  />
//         </Tabs>
//       </AppBar>
//     <main>
//         {children}
//     </main>
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//     </>
// )

// export default Layout

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      //width: `calc(100% - ${drawerWidth}px)`,
      //marginLeft: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar:{
    marginRight: theme.spacing(1),
  }
}));

const Layout = (props) => {
  const { container } = props;
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon> <HomeIcon fontSize="large"/> </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <AccountCircleIcon fontSize="large"/> </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ArtTrackIcon fontSize="large"/> </ListItemIcon>
          <ListItemText primary={"resume"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <BurstModeIcon fontSize="large"/> </ListItemIcon>
          <ListItemText primary={"portofolio"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <LibraryBooksIcon fontSize="large"/> </ListItemIcon>
          <ListItemText primary={"blogs"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ContactMailIcon fontSize="large"/> </ListItemIcon>
          <ListItemText primary={"contact"} />
        </ListItem>
      </List>
      <Divider />
      
    </div>
  );

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
          <Avatar className={classes.avatar} alt="Mohsen Shabanian" src="/images/me.png" />
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
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
        <Typography paragraph>
          {children}
        </Typography>
        
      </main>
    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Layout