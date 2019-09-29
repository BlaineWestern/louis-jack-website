import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import FilmPlayer from "../components/FilmPlayer"

export const query = graphql`
  query($slug: String!) {
    contentfulFilms(slug: { eq: $slug }) {
      title
      url
      yearMade(formatString: "YYYY")
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const Film = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulFilms.title} />
      <div className="main">
        <FilmPlayer data={props.data} />
      </div>
    </Layout>
  )
}

export default Film
