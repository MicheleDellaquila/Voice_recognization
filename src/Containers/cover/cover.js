import React from 'react';
import Carousel from '../../components/carousel/carousel';
import './cover.scss';

const Cover = () => {
  return (
    <div className='Cover'>
      <h1 className='Cover__title'>Voice Recognization</h1>
      <p className='Cover__text'>
        Dimostrare l’espansione del mondo web nel settore della intelligenza artificiale tramite
        l’integrazione di un sistema vocale.
      </p>
      <div className='Cover__container'>
        <div className='container'>
          <Carousel>

          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Cover;
