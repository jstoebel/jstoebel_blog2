/**
 * nav bar
 *   - right: headshot and name
 *   - left links and social icons
 * 
 * footer
 *  - bio
 */
import React from 'react';
import headshot from '../assets/images/headshot.jpg';
import config from '../../config';
import SocialIcons from '../components/SocialIcons'

const fullName = `${config.firstName} ${config.lastName}`

const InternalLayout = ({children, classes=[]}) => {

  const allClasses = ['internal-layout', ...classes]
  return (
    <div className={allClasses.join(' ')}>
      <nav className="internal-header">
        <a href="/" className="internal-header__link">
            <img
              className="internal-header__headshot img-fluid rounded-circle"
              src={headshot}
              alt={fullName}
            />
            <div href="/" className="internal-header__text">
              <h1 className="internal-header__name">{fullName}</h1>
              <div className="internal-header__title">{config.title}</div>

            </div>
        </a>
      </nav>
      <div className="internal-layout__content">
        {children}
      </div>
      <footer className="internal-layout__footer">
        <div className="internal-layout__footer-headshot-bio">
          <img
            className="internal-layout__footer-headshot img-fluid rounded-circle"
            src={headshot}
            alt={fullName}
          />

          <div className="internal-layout__footer-bio">
            {config.bio}
          </div>
        </div>

        <div className="internal-layout__footer-social">
          <SocialIcons />
        </div>

      </footer>
    </div>
  )
}

export default InternalLayout;
