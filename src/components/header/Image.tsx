import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";





  
const Image = () => {
useEffect(() => {
  AOS.init({ duration: 1000 });
});
  return (
    <LazyLoadImage
      data-aos="zoom-in-left"
      src="https://res.cloudinary.com/dabvgy03h/image/upload/v1695820316/samples/IMG_20220525_192230_iohnna.jpg"
      alt="..."
      ♦

      
      className="hero"
    />
  );
}

export default Image