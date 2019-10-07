import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/contact.css"

export default function contact() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            address
            platform
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact-container">
        <div className="contact">
          <div className="contact-unit-container">
            <a
              href="https://www.instagram.com/louisjackhs/"
              className="links"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM &nbsp; &#10149;
            </a>
            <br />
            <a
              href="https://vimeo.com/louisjack"
              className="links"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIMEO &nbsp; &#10149;
            </a>
            <br />
            <br />
            {data.allContentfulContact.edges.map(x => (
              <div className="contact-unit">
                <p>
                  {x.node.platform.toUpperCase()}:<br /> {x.node.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
