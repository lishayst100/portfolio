import React from 'react'

type ProjectProps = {
  framework: string[];
};

const Framwork = ({framework}:ProjectProps) => {
  return (
    <div className='d-flex gap-2 flex-wrap justify-content-center align-items-center'>
      {framework.map((f) => (
        <span key={f} className='framework shadow-lg p-2'>{f}</span>
      ))}
    </div>
  );
}

export default Framwork