import React from 'react';
import './Home.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import Subjects from '../../Utility/Subjects';
import SubjectList from '../../Containers/SubjectList/SubjectList';

const Home = () => {
  return (
    <div className='Home container'>
      <div className='Home__row'>
        <div className='Home__content'>
          <motion.h1
            initial={{
              x: -400,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'easeOutSine', duration: 0.85 }}
            className='Home__content-author'
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
            className='Home__content-title'
          >
            Voice recognization
          </motion.h1>
        </div>
        <ul className='Home__list row'>
          {Subjects.map((subject, index) => {
            return (
              <SubjectList
                key={index}
                id={index}
                image={subject.backgroundImage}
                link={subject.link}
                title={subject.title}
                description={subject.description}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
