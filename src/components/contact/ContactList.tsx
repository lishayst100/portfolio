import React from 'react'
import { contact, contactWithDelayArray } from '../../services/contact'
import SingleContact from './SingleContact';
import './Contact.scss'

const ContactList = () => {
  return (
    <div
      className="
    d-flex justify-content-lg-around   flex-column flex-lg-row align-items-lg-center container mx-auto  gap-3
    "
    >
      {contactWithDelayArray.map((contactItem, index) => (
        <SingleContact {...contactItem} key={index} />
      ))}
    </div>
  );
}

export default ContactList