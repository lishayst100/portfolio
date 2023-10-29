import React from 'react'
import './Skill.scss'

type SkillProps = {
    image:string
    image1:string
    skill1:string
    skill2:string
}

const Skill = ({image,image1,skill1,skill2}:SkillProps) => {
  return (
      <div key={skill1} className='d-flex gap-1 skill'>
        <img src={image} alt={skill1} />
        <img src={image1} alt={skill2} />
      </div>
    
  );
}

export default Skill