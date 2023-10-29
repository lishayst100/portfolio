import React from 'react'
import {BsPuzzleFill} from 'react-icons/bs'
import { useResize } from '../../hooks/useResize';

const TitlePort = () => {
    const screen = useResize()
  return (
    <div className={`container-60 mx-auto bg-light ${screen > 500 ? '' : 'text-center'}`}>
      <h3 className='blue'>Portfolio</h3>
      <span className='subtitle'>Each project is a unique piece of development <BsPuzzleFill/></span>
    </div>
  );
}

export default TitlePort