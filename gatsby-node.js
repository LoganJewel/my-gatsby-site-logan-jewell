const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : ''
    createNodeField({
        node,
        name: `slug`,
        value: slug,
    })
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const pageTemplate = path.resolve('src/components/recipe.js')
        resolve(
            graphql(`
            query MyQuery {
                Drupal {
                  nodeRecipes(first: 10) {
                    edges {
                      node {
                        changed
                        id
                        cookingTime
                        created
                        path
                        title
                        preparationTime
                        numberOfServings
                        recipeInstruction {
                          format
                          processed
                          value
                        }
                      }
                    }
                  }
                }
              }
    `).then(result => {
            if (result.errors) {
            reject(result.errors)
            }
            const pages = result.data.Drupal.nodeRecipes.edges; 

            pages.forEach(({ node }, index) => {
            const page_path = node.path

            createPage({
                path: `${page_path}`,
                component: pageTemplate,
                context: {
                nid: node.id,  
                data: node, 
                },
            })
            })
        })
        )
    });
}