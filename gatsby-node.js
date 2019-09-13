const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const filmTemplate = path.resolve('./src/templates/film.js')

    const res = await graphql(`
            query {
              allContentfulFilms {
              edges {
                node {
                  slug
                }
              }
            }
          }
      `)

    res.data.allContentfulFilms.edges.forEach((edge) => {
        createPage({
            component: filmTemplate,
            path: `/films/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}


/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
