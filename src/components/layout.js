import React from "react"
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Layout = ({children}) =>(
    <>
    <AppBar position="static">
        <Tabs >
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>
    <main>
        {children}
    </main>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </>
)

export default Layout