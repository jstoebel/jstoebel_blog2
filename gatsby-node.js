const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  
  posts.forEach(({ node }, index) => {
    const next = index === 0 ? undefined : posts[index - 1].node;
    const prev = index === posts.length - 1 ? undefined : posts[index + 1].node;


    console.log('creating page for post', node.frontmatter.path);
    
    
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev,
        next,
      },
    })
  })
}