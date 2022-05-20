import React from 'react';
import './heroInformatica.scss';
import InformaticaPage from '../../assets/images/informaticaPage.jpg';

const HeroInformatica = () => {
  return (
    <div className='HeroInformatica'>
      <div className='HeroInformatica__container'>
        <div className='HeroInformatica__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <h1 className='HeroInformatica__title'>Descrizione e spiegazione di una base dati</h1>
            <p className='HeroInformatica__text'>
              Con base di dati in informatica si indica un insieme di dati strutturati ovvero
              omogeneo per contenuti e formato, memorizzati in un computer.
            </p>
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
