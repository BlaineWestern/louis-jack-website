import React from "react"
import ReactPlayer from "react-player"
import LandingTitle from "../components/LandingTitle"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ReactPlayer
      playing={true}
      loop={true}
      url={"https://vimeo.com/louisjack/showreelwebsite"}
      width="100%"
      height="100%"
    />
    <LandingTitle />
  </Layout>
)

export default IndexPage
