import React from 'react';
import './heroGestione.scss';
import GestionePage from '../../assets/images/gestionePage.png';

const HeroGestione = () => {
  return (
    <div className='HeroGestione'>
      <div className='HeroGestione__container'>
        <div className='HeroGestione__row'>
          <div className='col-xs-12 col-md-10 col-lg-7'>
            <h1 className='HeroGestione__title'>
              Ambience App - Spiegazione di un ciclo di vita di un progetto.
            </h1>
            <p className='HeroGestione__text'>
              Attraverso Ambience app cerchiamo di salvare il nostro pianeta dal disastro
              ambientale, controllando l'ambiente in cui viviamo
            </p>
          </div>
          <div className='col-xs-12 col-md-10 col-lg-4'>
            <img src={GestionePage} alt='gestione' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGestione;
