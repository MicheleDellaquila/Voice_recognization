import React from 'react';
import './heroItaliano.scss';
import ScrollBar from '../../assets/icons/scroll-bar.png';
import { Link } from 'react-scroll';

const HeroItaliano = () => {
  return (
    <div className='HeroItaliano'>
      <div className='HeroItaliano__container'>
        <div className='HeroItaliano__row'>
          <div className='col-xs-12'>
            <h1 className='HeroItaliano__title'>
              Riflessioni sulla tecnologia e la critica dei poeti del 900
            </h1>
            <p className='HeroItaliano__text'>
              Riflessione sull'attuale utilizzo e critica odierna verso la tecnologia , confrontado
              ciò con il pensiero 900 centesco
            </p>
          </div>
        </div>
      </div>
      <div className='HeroItaliano__shadow' />
    </div>
  );
};

export default HeroItaliano;
