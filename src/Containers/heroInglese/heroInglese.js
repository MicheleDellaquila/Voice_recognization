import React from 'react';
import './heroInglese.scss';
import inglesePage from '../../assets/images/inglesePage.jpg';

const HeroInglese = () => {
  return (
    <div className='HeroInglese'>
      <div className='HeroInglese__container'>
        <div className='HeroInglese__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroInglese__title'>Sicurezza informatica, perchè è fondamentale</h1>
            <p className='HeroInglese__text'>
              La sicurezza informatica, (in inglese information security) è l'insieme dei mezzi,
              delle tecnologie e delle procedure tesi alla protezione dei sistemi informatici in
              termini di disponibilità, confidenzialità e integrità dei beni o asset informatici.
            </p>
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
