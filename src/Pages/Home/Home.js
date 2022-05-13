import React from 'react';
import './home.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import routeAnimation from '../../animation/routeAnimation';
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Footer from '../../containers/footer/footer';

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
      <Hero />
      <Footer />
    </motion.div>
  );
};

export default Home;
