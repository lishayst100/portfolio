import React from 'react'
import { useResize } from '../../hooks/useResize';

const Image = () => {
    const resize = useResize()
  return (
    <img
      src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
      alt="computer"
      className={resize > 500 ? "img-about" : 'img-fluid'}
    />
  );
}
//410 350

export default Image