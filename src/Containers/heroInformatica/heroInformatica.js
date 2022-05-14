import React from 'react';
import './heroInformatica.scss';
import InformaticaPage from '../../assets/images/informaticaPage.jpg';
import ScrollBar from '../../assets/icons/scroll-bar.png';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-scroll';

const HeroInformatica = () => {
  return (
    <div className='HeroInformatica'>
      <div className='HeroInformatica__container'>
        <header className='HeroInformatica__header'>
          <MdKeyboardArrowLeft className='HeroInformatica__header-icon' />
          <p className='HeroInformatica__header-text'>Torna indietro</p>
        </header>
        <div className='HeroInformatica__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroInformatica__title'>Descrizione e spiegazione di una base dati</h1>
            <p className='HeroInformatica__text'>
              Con base di dati in informatica si indica un insieme di dati strutturati ovvero
              omogeneo per contenuti e formato, memorizzati in un computer.
            </p>
            <div className='HeroInformatica__btnContainer'>
              <button className='HeroInformatica__btnContainer-btn'>
                <Link
                  to='section1'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='HeroInformatica__btn-link'
                >
                  <img
                    className='HeroInformatica__btn-icon'
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
            <img src={InformaticaPage} alt='informatica' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInformatica;
