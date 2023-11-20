import React, { useEffect } from 'react'
import { useResize } from '../../hooks/useResize';
import AOS from "aos";
import "aos/dist/aos.css";

const Image = () => {
    const resize = useResize()
    useEffect(() => {
      AOS.init({ duration: 1000 });
    },[]);
  return (
    <img
    loading='eager'
      data-aos="fade-up"
      data-aos-delay="500"
      src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
      alt="computer"
      className={resize > 500 ? "img-about" : "img-fluid"}
    />
  );
}
//410 350

export default Image