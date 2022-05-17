import React, { useState, useEffect } from 'react';
import './carousel.scss';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Carousel = ({ items, children }) => {
  const [currentItem, setCurrentItem] = useState(0);

  // effect for slide carousel
  useEffect(() => {
    const item = document.querySelectorAll('#slide');
    item.forEach((element) => {
      element.style.transform = `translateX(${-100 * currentItem}%)`;
    });
  }, [currentItem]);

  // left
  const leftHandler = () => {
    if (currentItem === 0) return;
    setCurrentItem((prev) => prev - 1);
  };

  // right
  const rightHandler = () => {
    if (currentItem === items - 1) {
      setCurrentItem(0);

      return;
    }
    setCurrentItem((prev) => prev + 1);
  };

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
      <div className='Carousel__action'>
        <span className='Carousel__leftAction' onClick={leftHandler}>
          <BiChevronLeft className='Carousel__leftAction-icon' />
        </span>
        <span className='Carousel__currentItem'>{currentItem + 1}</span>
        <span className='Carousel__rightAction' onClick={rightHandler}>
          <BiChevronRight className='Carousel__rightAction-icon' />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
