import React from 'react';
import './informatica.scss';
import HeroInformatica from '../../containers/heroInformatica/heroInformatica';
import Database from '../../containers/database/database';

const Informatica = () => {
  return (
    <div className='Informatica'>
      <HeroInformatica />
      <Database />
    </div>
  );
};

export default Informatica;
