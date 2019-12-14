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

const InternalLayout = ({children}) => (
  <div className="internal-layout">
    <nav className="internal-header">
      <div className="internal-header__left">
        <img
          className="internal-header__headshot img-fluid rounded-circle mx-auto mb-2"
          src={headshot}
          alt=""
        />
      </div>

      <div className="internal-header__right">
        <ul className="internal-header__links">

          {
            config.tabs.map((tab, i) => <li className="internal-header__link-item"><a className="internal-header__link navbar-item" href={`/#${tab.href}`}>{tab.content}</a></li> )
          }
        </ul>
      </div>
    </nav>

    {children}
    <footer>
      {config.bio}
    </footer>
  </div>
)

export default InternalLayout;
