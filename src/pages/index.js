import React, { useState, useEffect } from "react"
import Vimeo from "@u-wave/react-vimeo"
import ReactTimeout from "react-timeout"
import LandingTitle from "../components/LandingTitle"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [play, setPlay] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPlay(true)
    }, 1000)
  })
  return (
    <Layout>
      <SEO title="Home" />
      <div className="video-container">
        {play && (
          <Vimeo
            className="video-player"
            video="365937618"
            autoplay={true}
            width="110%"
            loop="true"
            controls="false"
          />
        )}
        <LandingTitle />
      </div>
    </Layout>
  )
}

export default ReactTimeout(IndexPage)
