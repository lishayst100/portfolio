import React from 'react'
import { IconType } from 'react-icons/lib'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ContactType } from '../../services/contact';

/* interface ContactType {
    icon:IconType;
    title:string
    details:string
    link:string
    delay?:number | undefined
} */


const SingleContact = ({details,icon,title,link,delay}:ContactType) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

    const IconComponent = icon;


  return (
    <div className="d-flex gap-3" data-aos="fade-up" data-aos-delay={delay}>
      <IconComponent className="contact-icon shadow-lg" />
      <div className="d-flex flex-column">
        <span className="font-bolder">{title}</span>
        <a href={`${link}${details}`} className="details">
          {details}
        </a>
      </div>
    </div>
  );
}

export default SingleContact