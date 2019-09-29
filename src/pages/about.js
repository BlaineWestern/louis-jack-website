import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.css"

export default function about() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            mailingListUrl
            biography {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <div className="biography-container">
        <div className="biography">
          <a
            className="mailing-list-link"
            href={data.allContentfulAbout.edges[0].node.mailingListUrl}
            target="_blank"
          >
            NEWSLETTER &nbsp; &#10149;
          </a>
          <br />
          <br />
          <p className="about-title">BIOGRAPHY:</p>
          <div
            className="biography-text"
            dangerouslySetInnerHTML={{
              __html:
                data.allContentfulAbout.edges[0].node.biography
                  .childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
