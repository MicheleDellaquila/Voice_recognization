import React from 'react';
import './heroHeader.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const HeroHeader = () => {
  return (
    <header className='HeroHeader'>
      <MdKeyboardArrowLeft className='HeroHeader__icon' />
      <p className='HeroHeader__text'>Torna indietro</p>
    </header>
  );
};

export default HeroHeader;
