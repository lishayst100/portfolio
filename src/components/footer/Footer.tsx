import React from 'react'
import Links from '../header/Links';
import '../header/Hero.scss'
const Footer = () => {
  return (
    <div className="bg-light py-5">
      <div className="container mx-auto flex-column flex-lg-row gap-2 d-flex justify-content-around align-items-center">
        <span className='text-center '>Copyright © 2023. All rights are reserved to Lishay Shem Tov</span>
        <div className="footer-links">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Footer