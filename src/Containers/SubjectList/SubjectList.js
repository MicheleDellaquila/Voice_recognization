import React from 'react';
import './SubjectList.css';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';

const SubjectList = ({ image, link, title, description }) => {
  return (
    <li className='SubjectList col-xs-12 col-sm-6 col-md-4 col-lg-3'>
      <motion.article
        className='SubjectList__card'
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 1.05 }}
      >
        <Link to={link}>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className='SubjectList__card-backgroundImage'
          >
            <div className='SubjectList__card-wrapper'>
              <h1 className='SubjectList__wrapper-title'>{title}</h1>
              <p className='SubjectList__wrapper-subtitle'>{description}</p>
            </div>
          </div>
        </Link>
      </motion.article>
    </li>
  );
};

export default SubjectList;
