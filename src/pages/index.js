import React from "react"
import { Typography } from "@material-ui/core"
import ChangeText from "../components/changetext"
import Layout from "../components/layout"

import "./index.css"

export default () => (
  <Layout>
    <div className="main-banner">
      <Typography variant="h2" component="h2" gutterBottom>
        Mohsen Shabanian
      </Typography>
      <Typography variant="h4" gutterBottom>
        I'm a{" "}
        <ChangeText
          words={[
            "Web Developer.",
            "Teacher.",
            "Learner.",
            "Gamer.",
            "Computer Guy!",
          ]}
        />
      </Typography>
    </div>
  </Layout>
)
