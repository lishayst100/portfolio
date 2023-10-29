import React from 'react'
import { Project } from '../../types/types';
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

type ProjectProps = {
    link:string
    git:string
}

const Links = ({ link ,git}: ProjectProps) => {
  return (
    <div className="links-git d-flex gap-3 flex-wrap">
      <a href={git} target="_blank" rel="noreferrer" className="links">
        Code <FiGithub />{" "}
      </a>
      <a href={link} target="_blank" rel="noreferrer" className="links">
        Live Demo
        <BiLinkExternal />
      </a>
    </div>
  );
};

export default Links