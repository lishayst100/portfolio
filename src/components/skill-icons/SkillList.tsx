import React from 'react'
import { icons } from '../../services/iconsSkill'
import Skill from './Skill';
import ProjectList from '../projects/ProjectList';

const SkillList = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">
      <span className='font-bolder'>Tech Stack |</span>
      <div className="d-flex flex-wrap flex-lg-row gap-4 justify-content-center">
        {icons.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillList