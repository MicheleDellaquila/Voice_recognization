import React from 'react';
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='container'>
        <div className='Footer__row'>
          <ul className='Footer__socialList'>
            <li className='Footer__socialList-item'>
              <InstagramIcon />
            </li>
            <li className='Footer__socialList-item'>
              <LinkedInIcon />
            </li>
          </ul>
          <p className='Footer__text'>Copyright 2022 Michele Dellaquila</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
