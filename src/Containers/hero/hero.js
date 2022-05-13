import React from 'react';
import Carousel from '../../components/carousel/carousel';
import Slide1 from '../slide1/slide1';
import Slide2 from '../slide2/slide2';
import Slide3 from '../slide3/slide3';
import './hero.scss';

const Hero = () => {
  return (
    <div className='Cover'>
      <h1 className='Cover__title'>Voice Recognization</h1>
      <p className='Cover__text'>
        Dimostrare l’espansione del mondo web nel settore della intelligenza artificiale tramite
        l’integrazione di un sistema vocale.
      </p>
      <main className='Cover__main'>
        <div className='Cover__container'>
          <Carousel items={3}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Hero;
