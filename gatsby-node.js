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
        const recipeTemplate = path.resolve('src/components/recipe.js')
        resolve(
            graphql(`
            query MyQuery {
                Drupal {
                  nodeRecipes(first: 100) {
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
                        recipeCategory {
                            name
                        }
                        tags {
                            name
                        }
                        recipeInstruction {
                          format
                          processed
                          value
                        }
                        mediaImage {
                            mediaImage {
                              url
                              height
                              width
                            }
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
                component: recipeTemplate,
                context: {
                nid: node.id,  
                data: node, 
                },
            })
            })
        })
        )

        const articleTemplate = path.resolve('src/components/article.js')
        resolve(
            graphql(`
            query MyQuery {
              Drupal {
                nodeArticles(first: 100) {
                  edges {
                    node {
                      changed
                      id
                      tags {
                        name
                      }
                      mediaImage {
                        mediaImage {
                          url
                          height
                          width
                        }
                      }
                      title
                      author {
                        displayName
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
            const pages = result.data.Drupal.nodeArticles.edges; 

            pages.forEach(({ node }, index) => {
            const page_path = node.path

            createPage({
                path: `${page_path}`,
                component: articleTemplate,
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