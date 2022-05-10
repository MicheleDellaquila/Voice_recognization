import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.png';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/' className='Header__link'>
        <img src={Logo} alt='Voice Recognization' width={32} height={32} />
        <p className='Header__link-text'>Michele Dellaquila</p>
      </Link>
    </header>
  );
};

export default Header;
