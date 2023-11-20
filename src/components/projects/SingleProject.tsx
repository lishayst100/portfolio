import { Project } from '../../types/types'
import Links from './Links';
import Description from './Description';
import Framwork from './Framwork';
import Title from './Title';
import Image from './Image';
import './Project.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';




const SingleProject = ({date,desc,framework,git,image,link,title,index}:Project) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const linkto = (link:string) => {
      document.location = link
  }
 
  return (
    <div
      data-aos={index! % 2 === 0 ? 'flip-left' : 'flip-right'}
      
      className={`cardObserver  container-60 mx-auto d-flex flex-column-reverse justify-content-center ${
        index! % 2 === 0 ? "flex-lg-row" : "flex-lg-row-reverse"
      } gap-2 shadow p-4 rounded-3 `}
    >
      <div className="description d-flex flex-column justify-content-between align-items-center gap-3">
        <Title date={date} title={title} />
        <Description desc={desc} />
        <Framwork framework={framework} />
        <Links link={link} git={git} />
      </div>
      
        <Image image={image} title={title} link={link} onlink={linkto}/>
      
    </div>
  );
}

export default SingleProject