import React from 'react';
import './Carousel.scss';
import { motion } from 'framer-motion/dist/framer-motion';

const CarouselBtn = () => {
  return (
    <div className='CarouselBtn'>
      <motion.div
        whileTap={{
          scale: 0.95,
        }}
        className='CarouselBtn__prevBtn'
      >
        <p className='CarouselBtn__prevBtn-text'>Prev</p>
      </motion.div>
      <motion.div className='CarouselBtn__nextBtn'>
        <p className='CarouselBtn__prevBtn-text'>Next</p>
      </motion.div>
    </div>
  );
};

export default CarouselBtn;
