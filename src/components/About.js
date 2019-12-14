import React from 'react';

import config from '../../config';

const About = () => {
  return <section
    className="about resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  >
    <div className="w-100">
      <h1 className="mb-0 about__header">
        <span className="about__first-name">{config.firstName}</span>
        <span className="about__last-name text-primary">{config.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </div>
      <p className="lead mb-5">
        {config.bio}
      </p>
      <p className="lead mb-5">
        I'm also a co-panelist on a little podcast called <a href='https://www.greaterthancode.com/'>Greater Than Code</a>
      </p>
      <div className="social-icons">
        {config.socialLinks.map(social => {
          const { icon, url, name } = social;
          return (
            <a key={url} href={url}>
              <i className={`fab ${icon}`}  aria-hidden="true"></i>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  </section>
}

export default About
