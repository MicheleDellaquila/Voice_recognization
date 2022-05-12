import React from 'react';
import './slide2.scss';
import CardSubject from '../cardSubject/cardSubject';
import Italiano from '../../assets/images/italiano.jpg';
import Storia from '../../assets/images/storia.jpeg';
import Gestione from '../../assets/images/gestione.jpg';

const Slide2 = () => {
  return (
    <div className='Slide2' id='slide'>
      <ul className='Slide2__list'>
        <li className='Slide2__item col-md-4'>
          <CardSubject
            link='/italiano'
            image={Italiano}
            title='Italiano'
            description='Riflessioni sulla tecnologia e la critica dei poeti del 900'
          />
        </li>
        <li className='Slide2__item col-md-4'>
          <CardSubject
            link='/storia'
            image={Storia}
            title='Storia'
            description='Spiegazione prima rivoluzione industriale.'
          />
        </li>
        <li className='Slide2__item col-md-4'>
          <CardSubject
            link='/gestione'
            image={Gestione}
            title='Gestione'
            description='Spiegazione di un ciclo di vita di un progetto.'
          />
        </li>
      </ul>
    </div>
  );
};

export default Slide2;
