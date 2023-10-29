import React from 'react'
import Subtitle from './Subtitle'
import Links from './Links'
import { useResize } from '../../hooks/useResize'

const Title = () => {
    const resize = useResize()
  return (
    <div className={`${resize > 500 ? 'w-50' : 'w-100 p-4'} d-flex flex-column justify-content-center gap-3`} >
        <h2 className='font-bolder title-hero '>
           Fullstack Web Developer 
        </h2>
        <Subtitle/>
        <Links/>
    </div>
  )
}

export default Title