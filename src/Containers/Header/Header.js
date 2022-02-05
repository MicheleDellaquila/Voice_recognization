import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/' className='Header__link'>
        Voice Recognization
      </Link>
    </header>
  );
};

export default Header;
