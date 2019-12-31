import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import ViewListIcon from "@material-ui/icons/ViewList"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import WebIcon from "@material-ui/icons/Web"
import Layout from "../components/layout"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    //maxWidth: 500,
  },
})

export default () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Layout>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
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
    </Layout>
  )
}
