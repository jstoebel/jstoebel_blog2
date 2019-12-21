import React from 'react';

import config from '../../config';
import SocialIcons from '../components/SocialIcons'
import headshot from '../assets/images/headshot.jpg';

const About = () => {
  return <section
    className="about resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  >

    <img src={headshot} alt="Jacob Stoebel" className="about__headshot img-fluid img-profile rounded-circle"/>
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
      <SocialIcons />
    </div>
  </section>
}

export default About
