import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import About from '../components/About'
import Experience from '../components/Experience'
import Values from '../components/Values'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <About />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Values />
      <hr className="m-0" />
      <Values />
      <hr className="m-0" />
      <Projects />
    </div>
  </Layout>
);

export default IndexPage;
