import React from 'react';
import './heroStoria.scss';
import rivoluzioneIndustriale from '../../assets/images/primaRivoluzioneIndustriale.jpg';
import ScrollBar from '../../assets/icons/scroll-bar.png';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-scroll';

const HeroStoria = () => {
  return (
    <div className='HeroStoria'>
      <div className='HeroStoria__container'>
        <header className='HeroStoria__header'>
          <MdKeyboardArrowLeft className='HeroStoria__header-icon' />
          <p className='HeroStoria__header-text'>Torna indietro</p>
        </header>
        <div className='HeroStoria__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroStoria__title'>Spiegazione prima rivoluzione industriale</h1>
            <p className='HeroStoria__text'>
              La rivoluzione industriale fu un processo di evoluzione economica e di
              industrializzazione di società che da agricole-artigianali-commerciali si
              trasformarono in sistemi industriali caratterizzati dall'uso generalizzato di macchine
              azionate da energia meccanica.
            </p>
            <div className='HeroStoria__btnContainer'>
              <button className='HeroStoria__btnContainer-btn'>
                <Link
                  to='section1'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='HeroStoria__btn-link'
                >
                  <img
                    className='HeroStoria__btn-icon'
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
            <img src={rivoluzioneIndustriale} alt='rivoluzione industriale' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStoria;
