import React from 'react';
import './heroSistemi.scss';
import sistemiPage from '../../assets/images/sistemiPage.jpg';

const HeroSistemi = () => {
  return (
    <div className='HeroSistemi'>
      <div className='HeroSistemi__container'>
        <div className='HeroSistemi__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroSistemi__title'>Web 2.0, cos'è e quali sono i suoi utilizzi.</h1>
            <p className='HeroSistemi__text'>
              In informatica, nell'ambito della programmazione web, il termine web dinamico o web
              2.0 viene utilizzato per indicare tutte quelle applicazioni web che interagiscono
              attivamente con l'utente, modificando le informazioni mostrate in base alle
              informazioni generate da quest'ultimo e ricevute dall'application server.
            </p>
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
