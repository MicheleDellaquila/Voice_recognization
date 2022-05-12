import React from 'react';
import './cardSubject.scss';
import { Link } from 'react-router-dom';

const CardSubject = ({ link, image, title, description }) => {
  return (
    <Link to={link} className='CardSubject'>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='CardSubject__image'
      >
        <div className='CardSubject__wrapper'>
          <h1 className='CardSubject__wrapper-title'>{title}</h1>
          <p className='CardSubject__wrapper-description'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardSubject;
