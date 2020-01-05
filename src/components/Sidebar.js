import React, { Component, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import headshot from '../assets/images/headshot.jpg';
import config from '../../config';

const Sidebar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">
          {config.firstName} {config.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={headshot}
            alt="Jacob Stoebel"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {setMobileNavOpen( (prev) => !prev )}}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${mobileNavOpen ? '' : 'collapse'} navbar-collapse`} id="navbarSupportedContent">
        <Scrollspy
          items={config.tabs.map(s => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {config.tabs.map((tab, i) => {
            const { href, content } = tab;
            return (
              <li className="nav-item" key={href}>
                <Scroll type="id" element={href} setMobileNavOpen={setMobileNavOpen} >
                  <a className="nav-link" href={`#${href}`}>
                    {content}
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </div>
    </nav>
  );
}

export default Sidebar;
