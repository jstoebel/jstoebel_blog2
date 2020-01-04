import React from 'react'

const Experience = () => {

  const sections = [
    {
      company: 'ePublishing, Inc',
      title: 'Software Developer',
      date: '2018 - Present',
      bullets: [
        'Ship features (Rails / Javascript) in a fast paced environment for multiple clients striking a balance between completing work efficiently and minimizing technical debt.',
        'Maintain ePublishing’s main legacy system, Jade. Track down mysterious bugs, write documentation and refactor code for cleaner design and maintainability.',
        'Collaborate with team to develop a complete overhaul for ePublishing’s admin panel (React, Typescript, Graphql). Write code with careful consideration for maintainability years down the road. Consult with team lead on architectural decisions.',
        'Lead company in adoption of Typescript for new and legacy systems. Advocate for the benefits of type safety. Consult with team members on Typescript related questions.',
        'Mentor junior developers with software design, style and architectural decisions.'
      ],
    },

    {
      company: 'Mountain Tech Media',
      title: 'Co-Owner and Lead Software Developer',
      date: '2017 - 2018',
      bullets: [
        'Deliver customer success by developing, maintaining and administering web applications for clients using Ruby on Rails and React.',
        'Build team productivity by collaborating closely with a distributed, remote team to deliver valued features to clients.',
        'Enable flexibility and agility in client applications by maintaining a complete test suite (RSpec) with continuous integration service.',
        'Ensure consistent production environments by creating Ansible playbooks to enable consistent server provisioning and configuration. Maintain deploy toolchain (Capistrano) for seamless deploys.',
      ],
    },

    {
      company: 'Berea College',
      title: 'Technology and Data Systems Analyst',
      date: '2014 - 2018',
      bullets: [
        'Overhaul organization’s culture surrounding evidence based decision making by leading the development and operation of Ruby on Rails based accreditation web app.',
        'Enable agile based development by maintaining a robust test suite and deployment tools (Capistrano) to automate frequent deployments.',
        'Mentor and lead team of student developers to provide timely client support and quickly develop new features.',
        'Enable evidence based transformation by generating insightful analysis of organizational data using Python.'
      ],
    },
  ]
  return <section
    className="experience resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">

      <div className="experience__header-wrapper">
        <h2 className="experience__header">Experience</h2>
        <a href="/Jacob_Stoebel_Resume.pdf">full resume (PDF)</a>

      </div>
      {
        sections.map((section, i) => <Section key={i} {...section}/>)
      }
    </div>
  </section>
}

const Section = ({company, title, date, bullets}) => (

  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">

      <div className="resume-item__heading">
        <div className="resume-item__title-company">
          <h3 className="mb-0">{title}</h3>
          <div className="subheading mb-3">{company}</div>
        </div>

        <div className="resume-item__date">
          <span className="text-primary">{date}</span>
        </div>
      </div>

      <ul className="resume-item__bullets">
        {bullets.map((bullet, i) => <li className="resume-item__bullet" key={i}>{bullet}</li>) }
      </ul>

    </div>
  </div>
)

export default Experience
