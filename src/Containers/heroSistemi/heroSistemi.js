import React from 'react';
import './heroSistemi.scss';
import sistemiPage from '../../assets/images/sistemiPage.jpg';
import ScrollBar from '../../assets/icons/scroll-bar.png';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-scroll';

const HeroSistemi = () => {
  return (
    <div className='HeroSistemi'>
      <div className='HeroSistemi__container'>
        <header className='HeroSistemi__header'>
          <MdKeyboardArrowLeft className='HeroSistemi__header-icon' />
          <p className='HeroInformatica__header-text'>Torna indietro</p>
        </header>
        <div className='HeroSistemi__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroSistemi__title'>Web 2.0, cos'è e quali sono i suoi utilizzi.</h1>
            <p className='HeroSistemi__text'>
              In informatica, nell'ambito della programmazione web, il termine web dinamico o web
              2.0 viene utilizzato per indicare tutte quelle applicazioni web che interagiscono
              attivamente con l'utente, modificando le informazioni mostrate in base alle
              informazioni generate da quest'ultimo e ricevute dall'application server.
            </p>
            <div className='HeroSistemi__btnContainer'>
              <button className='HeroSistemi__btnContainer-btn'>
                <Link
                  to='section1'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='HeroSistemi__btn-link'
                >
                  <img
                    className='HeroSistemi__btn-icon'
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
            <img src={sistemiPage} alt='sistemi' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSistemi;
