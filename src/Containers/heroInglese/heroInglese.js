import React from 'react';
import './heroInglese.scss';
import inglesePage from '../../assets/images/inglesePage.jpg';
import ScrollBar from '../../assets/icons/scroll-bar.png';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-scroll';

const HeroInglese = () => {
  return (
    <div className='HeroInglese'>
      <div className='HeroInglese__container'>
        <header className='HeroInglese__header'>
          <MdKeyboardArrowLeft className='HeroInglese__header-icon' />
          <p className='HeroInglese__header-text'>Torna indietro</p>
        </header>
        <div className='HeroInglese__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroInglese__title'>Sicurezza informatica, perchè è fondamentale</h1>
            <p className='HeroInglese__text'>
              La sicurezza informatica, (in inglese information security) è l'insieme dei mezzi,
              delle tecnologie e delle procedure tesi alla protezione dei sistemi informatici in
              termini di disponibilità, confidenzialità e integrità dei beni o asset informatici.
            </p>
            <div className='HeroInglese__btnContainer'>
              <button className='HeroInglese__btnContainer-btn'>
                <Link
                  to='section1'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='HeroInglese__btn-link'
                >
                  <img
                    className='HeroInglese__btn-icon'
                    src={ScrollBar}
                    alt='srcoll bar icon'
                    width={18}
                  />
                  Scroll down
                </Link>
              </button>
            </div>
          </div>
          <div className='col-xs-12 col-md-10 col-lg-7'>
            <img src={inglesePage} alt='inglese' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInglese;
