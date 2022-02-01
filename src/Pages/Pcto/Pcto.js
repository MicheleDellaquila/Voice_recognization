import React from 'react';
import './Pcto.scss';
import Header from '../../Containers/Header/Header';
import Image from '../../Assets/Images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg';

const Pcto = () => {
  //TODO: inserire altre due immagini che si sovrappongo a quella gia inserita
  //TODO: Aggiungere title materia e lo scrool down , animazioni

  return (
    <div className='Pcto'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'></div>
          <div className='col-lg-7'>
            <img src={Image} alt='Alternanza scuola lavoro' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pcto;
