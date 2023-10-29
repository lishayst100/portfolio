import React from 'react'
import { projects } from '../../services/projects'
import SingleProject from './SingleProject'


const ProjectList = () => {
  return (
    <div className='d-flex flex-column gap-5'>
      {projects.map((p, i) =>
       
          <SingleProject key={i} {...p} index={i}/>
        
      )}
    </div>
  );
}

export default ProjectList