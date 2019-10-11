/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageTransition>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layout-wrapper">
          <div className="main">
            {children}
            <div className="footer">
              © LOUIS-JACK {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
