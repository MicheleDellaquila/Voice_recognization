import React from 'react';
import './heroStoria.scss';
import rivoluzioneIndustriale from '../../assets/images/primaRivoluzioneIndustriale.jpg';

const HeroStoria = () => {
  return (
    <div className='HeroStoria'>
      <div className='HeroStoria__container'>
        <div className='HeroStoria__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroStoria__title'>Spiegazione prima rivoluzione industriale</h1>
            <p className='HeroStoria__text'>
              La rivoluzione industriale fu un processo di evoluzione economica e di
              industrializzazione di società che da agricole-artigianali-commerciali si
              trasformarono in sistemi industriali caratterizzati dall'uso generalizzato di macchine
              azionate da energia meccanica.
            </p>
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
