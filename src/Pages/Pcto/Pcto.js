import React from 'react';
import './pcto.scss';
import Superarè from '../../assets/images/superarè.jpg';
import makeRoma from '../../assets/images/makeRoma.jpg';
import giornataMemoria from '../../assets/images/giornataMemoria.jpeg';

const Pcto = () => {
  return (
    <div className='Pcto'>
      <div className='Pcto__container'>
        <div className='Pcto__row'>
          <div className='col-xs-12 col-lg-4'>
            <img className='Pcto__image' src={Superarè} alt='Superarè' />
            <div className='Pcto__overlay' />
            <div className='Pcto__content'>
              <div className='Pcto__details'>
                <h3 className='Pcto__month'>SET</h3>
                <h3 className='Pcto__day'>02</h3>
                <h3 className='Pcto__year'>2020</h3>
              </div>
              <h1 className='Pcto__title'>Progetto superarè</h1>
              <p className='Pcto__subtitle'>Mappatura barriere archittetoniche Barletta.</p>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <img className='Pcto__image' src={makeRoma} alt='make faire roma' />
            <div className='Pcto__overlay' />
            <div className='Pcto__content'>
              <div className='Pcto__details'>
                <h3 className='Pcto__month'>OTT</h3>
                <h3 className='Pcto__day'>08</h3>
                <h3 className='Pcto__year'>2021</h3>
              </div>
              <h1 className='Pcto__title'>Make faire</h1>
              <p className='Pcto__subtitle'>
                Evento europeo sull' innovazione. E' una finestra sul futuro.
              </p>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <img className='Pcto__image' src={giornataMemoria} alt='giornata della memoria' />
            <div className='Pcto__overlay' />
            <div className='Pcto__content'>
              <div className='Pcto__details'>
                <h3 className='Pcto__month'>GEN</h3>
                <h3 className='Pcto__day'>27</h3>
                <h3 className='Pcto__year'>2021</h3>
              </div>
              <h1 className='Pcto__title'>Shoa</h1>
              <p className='Pcto__subtitle'>
                Giornata della memoria per la commemorazione dell'olocausto contro l'ebrei.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pcto;
