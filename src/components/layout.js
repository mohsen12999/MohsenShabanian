import React from "react"
import {app} from "gatsby-theme-material-ui"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Layout = ({children}) =>(
    <>
    <h1>its layout</h1>
    <main>
        {children}
    </main>
    </>
)

export default Layout