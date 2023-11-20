import React from 'react'
import Subtitle from './Subtitle'
import Links from './Links'
import { useResize } from '../../hooks/useResize'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Title = () => {
    const resize = useResize()
    useEffect(() => {
      AOS.init({ duration: 1000 });
    });
  return (
    <div
      className={`${
        resize > 500 ? "w-50" : "w-100 p-4"
      } d-flex flex-column justify-content-center gap-3`}
      data-aos="zoom-in-right"
    >
      <h2 className="font-bolder title-hero ">Fullstack Web Developer</h2>
      <Subtitle />
      <Links />
    </div>
  );
}

export default Title