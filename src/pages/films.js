import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Films from "../components/films"

export default function films() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFilms(sort: { fields: yearMade, order: DESC }) {
        edges {
          node {
            node_locale
            title
            slug
            yearMade(formatString: "YYYY")
            description {
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
      <SEO title="Films" />
      <Films data={data} />
    </Layout>
  )
}
