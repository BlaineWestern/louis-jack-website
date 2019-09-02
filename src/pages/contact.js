import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/contact.css'

export default function contact() {
    const data = useStaticQuery(graphql`
    query {
        allContentfulContact {
          edges {
            node {
              address,
              platform
            }
          }
        }
      }
    `)
    console.log(data.allContentfulContact.edges)
    return (
    <Layout>
        <SEO title="Contact" />
        <div className="contact-container">
        <div className="contact">   
        <p className="link-title">LINKS :</p>
        <div className="contact-unit-container">
        {data.allContentfulContact.edges.map(x => <div className="contact-unit"><p>{x.node.platform}:<br/> {x.node.address}</p></div>)}
        </div>
        </div>
        </div>  
    </Layout>
    )
}
