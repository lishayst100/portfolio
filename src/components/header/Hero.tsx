import React from 'react'
import SkillList from '../skill-icons/SkillList'
import Title from './Title'
import Image from './Image'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='d-flex flex-column gap-5 hero-padding'>
      <div className="d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row">
        <Title />
        <Image />
      </div>
      <SkillList/>
    </div>
  );
}

export default Hero