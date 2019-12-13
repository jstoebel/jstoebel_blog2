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
        I am software developer specalizing in creating software systems built with Ruby on Rails, Typescript/Javascript and React and, most importantly, people!
      </p>
      <div className="social-icons">
        {config.socialLinks.map(social => {
          const { icon, url } = social;
          return (
            <a key={url} href={url}>
              <i className={`fab ${icon}`}></i>
            </a>
          );
        })}
      </div>
    </div>
  </section>
}

export default About