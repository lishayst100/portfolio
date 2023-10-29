import React from 'react'
import { IconType } from 'react-icons/lib'

interface ContactType {
    icon:IconType;
    title:string
    details:string
    link:string
}


const SingleContact = ({details,icon,title,link}:ContactType) => {

    const IconComponent = icon;


  return (
    <div className="d-flex gap-3">
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