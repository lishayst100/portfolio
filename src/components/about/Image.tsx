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
      src="https://res.cloudinary.com/dlkhrcm4x/image/upload/v1751884517/workspace-1280538_1280_ra71ah.jpg"
      alt="computer"
      className={resize > 500 ? "img-about" : "img-fluid"}
    />
  );
}
//410 350

export default Image