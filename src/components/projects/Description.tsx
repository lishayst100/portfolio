import React from 'react'

type ProjectProps = {
  desc: string;
};

const Description = ({desc}: ProjectProps) => {
  return <p className='text-center w-75 gray'>{desc}</p>;
};

export default Description