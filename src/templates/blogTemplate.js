import React from "react"
import { graphql } from "gatsby"
import InternalLayout from '../components/InternalLayout'
import 'github-markdown-css'

export default function Template({
  data,
  pageContext: { next, prev }
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const layoutClasses = [];
  if (!prev) layoutClasses.push('first');
  if (!next) layoutClasses.push('last');
  return (
    <InternalLayout classes={layoutClasses}>
      <article className="blog-post-container markdown-body">
        <div className="blog-post">
          <h1 className="blog-post__title">{frontmatter.title}</h1>
          <p className="blog-post__date">{frontmatter.date}</p>
          <div
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
      <div className="next-prev">
        <NextPrev direction="prev" article={prev} />
        <NextPrev direction="next" article={next} />
      </div>
    </InternalLayout>
  )
}

const NextPrev = ({direction, article}) => {
  const bem = (element='') => element ? `${direction}__${element}` : direction

  if (!article || !article.frontmatter) return <div className={bem()}></div>

  const {path, title} = article.frontmatter;

  const arrowDirection = direction === 'prev' ? 'left' : 'right'
  return (
    <a href={path} className={bem()}>
      <h1 className={bem('title')}>{title}</h1>
      <i className={[bem('arrow'), 'fas', `fa-arrow-${arrowDirection}`, 'fab'].join(' ')} aria-hidden="true"></i>
    </a>

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