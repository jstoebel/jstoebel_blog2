import React from "react"
import { graphql } from "gatsby"
import InternalLayout from '../components/InternalLayout'
import Sidebar from '../components/Sidebar';

export default function Template({
  data,
  pageContext: { next, prev }
}) {
  console.log("TCL: prev", prev)
  console.log("TCL: next", next)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <InternalLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="blog-post__title">{frontmatter.title}</h1>
          <p className="blog-post__date">{frontmatter.date}</p>
          <div
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <div>{`prev is ${prev && prev.frontmatter.title}`}</div>
    </InternalLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`