import React, { useRef } from 'react';
import './carousel.scss';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Carousel = ({ items, children }) => {
  const currentItem = useRef(0);

  // left
  const leftHandler = () => {
    if (currentItem.current === 0) return;
    currentItem.current = currentItem.current - 1;

    // slide item carousel
    const item = document.querySelectorAll('#slide');
    item.forEach((element) => {
      element.style.transform = `translateX(${-100 * currentItem.current}%)`;
    });
  };

  // right
  const rightHandler = () => {
    if (currentItem.current === items - 1) {
      currentItem.current = 0;
      const item = document.querySelectorAll('#slide');
      item.forEach((element) => {
        element.style.transform = `translateX(${-100 * currentItem.current}%)`;
      });

      return;
    }
    currentItem.current = currentItem.current + 1;

    // slide item carousel
    const item = document.querySelectorAll('#slide');
    item.forEach((element) => {
      element.style.transform = `translateX(${-100 * currentItem.current}%)`;
    });
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
        <span className='Carousel__rightAction' onClick={rightHandler}>
          <BiChevronRight className='Carousel__rightAction-icon' />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
