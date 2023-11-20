import React, { useEffect } from 'react'
import Title from './Title'
import Text from './Text'
import AOS from "aos";
import "aos/dist/aos.css";


const TextAbout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="" data-aos="fade-down" data-aos-delay="500">
      <Title />
      <Text />
    </div>
  );
}

export default TextAbout