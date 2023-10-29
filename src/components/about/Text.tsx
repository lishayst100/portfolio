import React from 'react'
import { useResize } from '../../hooks/useResize';

const Text = () => {
    const resize = useResize()
  return (
    <section className={resize > 500 ? "gray" : "p-3 gray"}>
      As a Fullstack Web Developer, I possess an impressive arsenal of skills in
      HTML, CSS, JavaScript, React,Node js, MongoDb, Tailwind, and SCSS. I excel
      in designing and maintaining responsive websites that offer a smooth user
      experience. My expertise lies in crafting dynamic, engaging interfaces
      through writing clean and optimized code and utilizing cutting-edge
      development tools and techniques. I am also a team player who thrives in
      collaborating with cross-functional teams to produce outstanding web
      applications.
    </section>
  );
}

export default Text