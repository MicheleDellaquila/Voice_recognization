import React from 'react';
import './sistemi.scss';
import HeroSistemi from '../../containers/heroSistemi/heroSistemi';
import Web from '../../containers/web2.0/web2.0';

const Sistemi = () => {
  return (
    <div className='Sistemi'>
      <HeroSistemi />
      <Web />
    </div>
  );
};

export default Sistemi;
