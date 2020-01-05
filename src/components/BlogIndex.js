import React from "react"
import { useStaticQuery } from "gatsby"
import PostLink from "../components/PostLink"

const BlogIndex = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  `)

  return (
    <section
      className="blog-index resume-section p-3 p-lg-5"
      id="blog"
    > 
      <h2 className="blog-index__header">Writing/Podcasts/Etc</h2>

      {
        data.allMarkdownRemark.edges.map(({node}, i) => <BlogPreview key={i} {...node} />)
      }
    </section>
  )
}

const BlogPreview = ({excerpt, frontmatter }) => {
  
  const {title, path, date} = frontmatter;
  return (
    <article className="blog-preview">
      <a href={path} className="blog-preview__link">
        <h3 className="blog-preview__header">{title}</h3>
      </a>
      <time dateTime={date} className="blog-preview__date">{date}</time>
      <div className="blog-preview__excerpt">{excerpt}</div>
    </article>
  )
}

export default BlogIndex
