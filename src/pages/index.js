import React from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import ChangeText from "../components/changetext"

const useStyles = makeStyles({
  banner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-25%)",
  },
})

export default () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.banner}>
        <Typography variant="h2" component="h2" gutterBottom>
          Mohsen Shabanian
        </Typography>
        <Typography variant="h4" gutterBottom>
          I'm a{" "}
          <ChangeText
            words={["Web Developer.", "Teacher.", "Learner.", "Gamer."]}
          />
        </Typography>
      </div>
    </Layout>
  )
}
