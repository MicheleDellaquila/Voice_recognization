import React from 'react';
import './home.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import routeAnimation from '../../animation/routeAnimation';
import Header from '../../containers/header/header';
import Cover from '../../containers/cover/cover';

const Home = () => {
  return (
    <motion.div
      className='Home'
      initial='initial'
      animate='show'
      exit='hidden'
      variants={routeAnimation}
    >
      <Header />
      <Cover />
    </motion.div>
  );
};

export default Home;
