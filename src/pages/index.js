import React from "react"
import Vimeo from "@u-wave/react-vimeo"
import LandingTitle from "../components/LandingTitle"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="video-container">
      <Vimeo
        className="video-player"
        video="360773446"
        autoplay
        width="100%"
        loop="true"
        controls="false"
      />
      <LandingTitle />
    </div>
  </Layout>
)

export default IndexPage
