import React from 'react';

import Layout from '../components/Layout';

import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import About from '../components/About'
import Experience from '../components/Experience'
import Values from '../components/Values'
import Projects from '../components/Projects'
import BlogIndex from '../components/BlogIndex'

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0 home-page">
      <About />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Values />
      <hr className="m-0" />
      <Projects />
      <hr className="m-0" />
      <BlogIndex />
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
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
`