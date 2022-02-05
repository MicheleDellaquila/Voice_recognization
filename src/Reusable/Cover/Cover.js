import React from 'react';
import './Cover.scss';

const Cover = ({ title, subtitle, backgroundColor }) => {
  return (
    <div
      className='Cover'
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h1 className='Cover__title'>{title}</h1>
      <h2 className='Cover__subtitle'>{subtitle}</h2>
    </div>
  );
};

export default Cover;
