import React from 'react';
import './footer.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__container'>
        <div className='Footer__row'>
          <p className='Footer__text'>Copyright 2022 Michele Dellaquila.</p>
          <ul className='Footer__socialList'>
            <li className='Footer__socialList-item'>
              <Link to='https://www.instagram.com/micheledellaquila03/' target='_blank'>
                <BsInstagram className='Footer__item-icon' />
              </Link>
            </li>
            <li className='Footer__socialList-item'>
              <Link
                to='https://www.linkedin.com/in/michele-dellaquila-02a82b1b4/'
                target='_blank'
                replace
              >
                <BsLinkedin className='Footer__item-icon' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
