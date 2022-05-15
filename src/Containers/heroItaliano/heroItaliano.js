import React from 'react';
import './heroItaliano.scss';
import ScrollBar from '../../assets/icons/scroll-bar.png';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-scroll';

const HeroItaliano = () => {
  return (
    <div className='HeroItaliano'>
      <header className='HeroItaliano__header'>
        <MdKeyboardArrowLeft className='HeroItaliano__header-icon' />
        <p className='HeroItaliano__header-text'>Torna indietro</p>
      </header>
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
            <div className='HeroItaliano__btnContainer'>
              <button className='HeroItaliano__btnContainer-btn'>
                <Link
                  to='section1'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='HeroItaliano__btn-link'
                >
                  <img
                    className='HeroItaliano__btn-icon'
                    src={ScrollBar}
                    alt='srcoll bar icon'
                    width={18}
                  />
                  Scroll down
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='HeroItaliano__shadow' />
    </div>
  );
};

export default HeroItaliano;
