import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import ReactPlayer from 'react-player'
import Layout from '../components/layout'

export const query = graphql`
query (
    $slug: String!
  ) {
    contentfulFilms(slug: {eq: $slug}) {
      title,
      url,
      yearMade,
      description {
        childMarkdownRemark {
        html
        }
      }
    }
  }
  `



const Film = (props) => {

    return (
    <Layout>
        <SEO title={props.data.contentfulFilms.title} />
        <ReactPlayer url={props.data.contentfulFilms.url} playing width='100%' height='100%' />    
    </Layout>
    )
}

export default Film



// export default function video() {
//     return (
//     <Layout>
//         <SEO title="Video" />
//         <ReactPlayer url='https://vimeo.com/222562332/2a3cbef161' playing width='100%' height='100%' />    
//     </Layout>
//     )
// }