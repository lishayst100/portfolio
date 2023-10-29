import React from 'react'

type ProjectProps = {
  title: string;
  date: string;
};

const Title = ({date,title}:ProjectProps) => {
  return (
    <div className='d-flex align-items-center gap-1'>
      <span className='title-project'>{title} </span>
      <span className='date-project'>({date})</span>
    </div>
  );
}

export default Title