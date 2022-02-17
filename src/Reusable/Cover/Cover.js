import React from 'react';
import './Cover.scss';
import { motion } from 'framer-motion/dist/framer-motion';

/* animation cover */
const cover = {
  initial: {
    y: -400,
    borderBottomLeftRadius: 0,
    transition: { type: 'easeInSine', duration: 1 },
  },
  animate: {
    y: 0,
    borderBottomLeftRadius: 140,
    transition: { type: 'easeInSine', duration: 1 },
  },
};

const Cover = ({ title, subtitle, backgroundColor }) => {
  return (
    <motion.div
      variants={cover}
      initial='initial'
      animate='animate'
      className='Cover'
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h1 className='Cover__title'>{title}</h1>
      <h2 className='Cover__subtitle'>{subtitle}</h2>
    </motion.div>
  );
};

export default Cover;
