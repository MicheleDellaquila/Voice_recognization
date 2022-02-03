import React from 'react';
import './SchoolObject.scss';

const SchoolObject = ({ backgroundImage, title, description }) => {
  return (
    <article className='SchoolObject'>
      <img className='SchoolObject__image' src={backgroundImage} alt={title} />
      <div className='SchoolObject__content'>
        <h1 className='SchoolObject__content-title'>{title}</h1>
        <p className='SchoolObject__content-description'>{description}</p>
      </div>
    </article>
  );
};

export default SchoolObject;
