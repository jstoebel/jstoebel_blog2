module.exports = {
  siteTitle: 'Jacob Stoebel', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#4b7277',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Jacob',
  lastName: 'Stoebel',

  bio: 'I am software developer specalizing in creating software systems built with Ruby on Rails, Typescript/Javascript and React and, most importantly, people!',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/jstoebel',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jacob-stoebel-71705223?trk=nav_responsive_tab_profile',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/jstoebel',
    },
  ],
  email: 'jstoebel@gmail.com',

  tabs: [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Values', href: 'values' },
    { content: 'Projects', href: 'projects' }
  ]
};

// shirt green: #4b7277