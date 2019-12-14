import React from 'react';
import config from '../../config';

const SocialIcons = () => (
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
)

export default SocialIcons;