import React from 'react'

const Projects = () => {
  
  const projects = [
    {
      name: 'Design Patterns',
      blurb: "I've been learning more about design patterns by creating toy examples and then reflecting on how design patterns can improve their design.",
      url: 'https://github.com/jstoebel/design_patterns'
    },
    {
      name: 'Refactoring',
      blurb: "I'm practicing refactoring katas with a focus on Fowler's refactoring patterns and SOLID design.",
      url: 'https://github.com/jstoebel/refactoring'
    },
    {
      name: 'Orphanage',
      blurb: 'A simple Active Record library for storing temporary orphan records.',
      url: 'https://github.com/jstoebel/orphanage'
    },
    {
      name: 'use-form',
      blurb: "An experiment in React hooks to create a general web form. Let's see how general we can make things!",
      url: 'https://github.com/jstoebel/use-form'
    },
    {
      name: 'Critical Response Talk',
      blurb: 'What does an innovator from the dance world have to teach us about code reviews? It turns out quite a lot! This is a talk about the Critical Response Process by Liz Lerman. Check out a video of it from <a href="https://www.youtube.com/watch?v=hP_2XKYia9I">Ruby Conf</a>.',
      url: 'https://github.com/jstoebel/critical_response_talk'
    },
    {
      name: 'eslint-todo',
      blurb: 'Generate a todo list of eslint errors. Enforce strict linting standards while letting existing ones pass until you can get to them.',
      url: 'https://github.com/jstoebel/eslint-todo'
    },
    {
      name: 'SVG Gallery',
      blurb: 'An experiment in image processing built in full stack Javascript (Typescript, React, Node, Graphql). Create an svg trace of images for preview while waiting for the real image to load.',
      url: 'https://github.com/jstoebel/svg_gallery'
    },
    {
      name: 'GTM Composer',
      blurb: 'A mad science experiment to automate setting up Google Tag Manager containers using React Ink. Describe your GTM containers in code rather than config files!',
      url: 'https://github.com/jstoebel/gtm-composer'
    }
  ]
  return (
    <section
      className="resume-section p-3 p-lg-5"
      id="projects"
    >
      <h2>Projects</h2>

      <p>I work on side projects in my spare time primarily to learn new concepts. Here are some of my more recent ones.</p>
      <div className="projects">
        {
          projects.map((project, i) => <Project key={i} {...project} />)
        }
      </div>
    </section>
  )
}

const Project = ({name, blurb, url}) => (
  <div className="project">
    <h3 className="project__name">
      <a className="project__link" href={url}>{name}</a>
    </h3>
    <p className="project__blurb" dangerouslySetInnerHTML={{__html: blurb}}></p>
  </div>
)

export default Projects 
