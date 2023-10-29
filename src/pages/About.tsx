import React from 'react'
import TextAbout from '../components/about/TextAbout'
import Image from '../components/about/Image'
import '../components/about/About.scss'

const About = () => {
  return (
    <div className='container-60 mx-auto flex-lg-row flex-column d-flex justify-content-center align-items-center gap-5 py-5'
    id='about'>
      <Image />
      <TextAbout />
    </div>
  );
}

export default About