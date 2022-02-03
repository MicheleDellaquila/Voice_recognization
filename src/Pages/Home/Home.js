import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import SchoolObject from '../../Containers/SchoolObject/SchoolObject';
import Image from '../../Assets/Images/34e366bb07f1b63a7aeaac232eed3f2e.png';
import Pcto from '../../Assets/Images/Pcto.png';
import Italiano from '../../Assets/Images/Italiano.jpg';
import ReactJS from '../../Assets/Images/React js.jpg';
import Web from '../../Assets/Images/Web 2.0.jpg';
import Storia from '../../Assets/Images/Storia.jpeg';
import { motion } from 'framer-motion/dist/framer-motion';

const Home = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // effect for carousel
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='Home'>
      <div className='relative'>
        <h1 className='Home__author'>Michele Dellaquila</h1>
        <h1 className='Home__title'>Voice recognization</h1>
      </div>
      <motion.div
        ref={carousel}
        className='Home__carousel'
        whileTap={{
          cursor: 'grabbing',
        }}
      >
        <motion.div
          drag='x'
          dragConstraints={{
            right: 0,
            left: -width,
          }}
          className='Home__carousel-inner'
        >
          <div className='Home__carousel-item'>
            <SchoolObject
              backgroundImage={Pcto}
              title='PCTO'
              description='Relazione attività alternanza scuola lavoro.'
            />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject
              backgroundImage={Italiano}
              title='Italiano'
              description='Riflessioni sulla tecnologia e il loro sviluppo futuro.'
            />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject
              backgroundImage={Storia}
              title='Storia'
              description='Spiegazione terza rivoluzione industriale.'
            />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject backgroundImage={Image} title='Italiano' description='ciao' />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject
              backgroundImage={Web}
              title='Sistemi'
              description='Web 2.0, cose e quali sono i suoi utilizzi.'
            />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject
              backgroundImage={ReactJS}
              title='Tpist'
              description='React js. Quali tecnologie compone il mio sito web.'
            />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject backgroundImage={Image} title='Italiano' description='ciao' />
          </div>
          <div className='Home__carousel-item'>
            <SchoolObject backgroundImage={Image} title='Italiano' description='ciao' />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
