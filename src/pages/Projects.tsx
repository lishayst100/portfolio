import React from 'react'
import TitlePort from '../components/projects/TitlePort'
import ProjectList from '../components/projects/ProjectList'

const Projects = () => {
  return (
    <div className='bg-light d-flex flex-column justify-content-start align-items-start py-5 gap-5' id='projects'>
        <TitlePort/>
        <ProjectList/>
    </div>
  )
}

export default Projects