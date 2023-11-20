import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface ContactType {
  icon:IconType;
  title:string;
  delay?:number;
  link:string;
  details:string;
}

export const contact = [
  {
    icon: BsFillTelephoneFill,
    title: "Phone",
    details: "050-3321366",
    link: "tel:",
    
  },
  {
    icon: FiMail,
    title: "Mail",
    details: "Lishayst100@gmail.com",
    link: "mailto:",
   
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
    
  },
];


export const contact1:ContactType[] = [
  {
    icon: BsFillTelephoneFill,
    title: "Phone",
    details: "050-3321366",
    link: "tel:",
    
  },
  {
    icon: FiMail,
    title: "Mail",
    details: "Lishayst100@gmail.com",
    link: "mailto:",
    
  },
  {
    icon: FiMail,
    title: "Mail",
    details: "Lishayst100@gmail.com",
    link: "mailto:",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Hod-HaSharon",
    link: "Hod-HaSharon",
    
  },
 
  
];


const contactWithDelay = (arr:ContactType[]) => {
  let delay = 300
  for (let i = 0; i < arr.length; i++) {
    if(i === 0){
      arr[0].delay = delay
    }else{
      arr[i].delay = delay + arr[i - 1].delay!;
    }
    
    
  }

  return arr
}

export const contactWithDelayArray = contactWithDelay(contact)

export const linkedin = "https://www.linkedin.com/in/lishay-shem-tov-0b9887261";
export const github = "https://github.com/lishayst100";