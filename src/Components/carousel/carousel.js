import React from 'react';
import './carousel.scss';

const Carousel = ({ items, children }) => {
  return (
    <div className='Carousel'>
      <div
        style={{
          width: `${items}00%`,
        }}
        className='Carousel__inner'
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
