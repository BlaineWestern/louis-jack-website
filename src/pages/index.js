import React from "react"
import ReactPlayer from "react-player"
import LandingTitle from "../components/LandingTitle"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="video-container">
      <ReactPlayer
        playing={true}
        loop={true}
        url={
          "https://player.vimeo.com/video/360773446?api=1&background=1&autoplay=1&loop=1"
        }
        width="100%"
        height="100%"
      />
      <LandingTitle />
    </div>
  </Layout>
)

export default IndexPage
