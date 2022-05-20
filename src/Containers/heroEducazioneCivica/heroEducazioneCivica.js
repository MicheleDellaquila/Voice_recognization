import React from 'react';
import './heroEducazioneCivica.scss';
import educazioneCivicaPage from '../../assets/images/educazioneCivicaPage.jpg';

const HeroEducazioneCivica = () => {
  return (
    <div className='HeroEducazioneCivica'>
      <div className='HeroEducazioneCivica__container'>
        <div className='HeroEducazioneCivica__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroEducazioneCivica__title'>
              L'uso della tecnologia nella problematica ambientale.
            </h1>
            <p className='HeroEducazioneCivica__text'>
              Utilizzare la tecnologia per poter salvare il nostro pianeta dal disastro ambientale.
            </p>
          </div>
          <div className='col-xs-12 col-md-10 col-lg-7'>
            <img src={educazioneCivicaPage} alt='informatica' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEducazioneCivica;
