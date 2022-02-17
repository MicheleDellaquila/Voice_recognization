import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import SchoolObject from '../../Containers/SchoolObject/SchoolObject';
import Image from '../../Assets/Images/34e366bb07f1b63a7aeaac232eed3f2e.png';
import Pcto from '../../Assets/Images/Pcto.png';
import Italiano from '../../Assets/Images/Italiano.jpg';
import ReactJS from '../../Assets/Images/React js.jpg';
import Web from '../../Assets/Images/Web 2.0.jpg';
import Storia from '../../Assets/Images/Storia.jpeg';
import Gestione from '../../Assets/Images/Gestione.jpeg';
import Informatica from '../../Assets/Images/Informatica.jpg';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
import CarouselBtn from '../../Components/CarouselBtn/CarouselBtn';

const Home = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // effect for carousel
  useEffect(() => {
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='Home container'>
      <div className='Home__content'>
        <div className='Home__content-box'>
          <motion.h1
            initial={{
              x: -400,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'easeOutSine', duration: 0.85 }}
            className='Home__box-author'
          >
            Michele Dellaquila
          </motion.h1>
          <motion.h1
            initial={{
              y: -400,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'easeOutSine', duration: 0.85, delay: 0.3 }}
            className='Home__box-title'
          >
            Voice recognization
          </motion.h1>
        </div>
        <CarouselBtn />
      </div>
    </div>
  );
};

export default Home;
