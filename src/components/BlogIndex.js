import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"

const IndexPage = (props) => {
  console.log("TCL: IndexPage -> props", props)
  
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default IndexPage
