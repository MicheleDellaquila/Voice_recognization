import React from 'react';
import './footer.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__container'>
        <div className='Footer__row'>
          <p className='Footer__text'>Copyright 2022 Michele Dellaquila.</p>
          <ul className='Footer__socialList'>
            <li className='Footer__socialList-item'>
              <a
                href='https://www.instagram.com/micheledellaquila03/'
                target='_blank'
                rel='noreferrer'
              >
                <BsInstagram className='Footer__item-icon' />
              </a>
            </li>
            <li className='Footer__socialList-item'>
              <a
                href='https://www.linkedin.com/in/michele-dellaquila-02a82b1b4/'
                target='_blank'
                rel='noreferrer'
              >
                <BsLinkedin className='Footer__item-icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
