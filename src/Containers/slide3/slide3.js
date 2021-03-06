import React from 'react';
import './slide3.scss';
import CardSubject from '../cardSubject/cardSubject';
import Inglese from '../../assets/images/inglese.jpg';
import Pcto from '../../assets/images/pcto.jpg';
import EducazioneCivica from '../../assets/images/educazioneCivica.jpg';

const Slide3 = () => {
  return (
    <div className='Slide3' id='slide'>
      <ul className='Slide3__list'>
        <li className='Slide3__item col-md-4'>
          <CardSubject
            link='/inglese'
            image={Inglese}
            title='Inglese'
            description='Sicurezza informatica , perchè è fondamentale.'
          />
        </li>
        <li className='Slide3__item col-md-4'>
          <CardSubject
            link='/pcto'
            image={Pcto}
            title='Pcto'
            description='Varie attività svolte nel corso dei tre anni.'
          />
        </li>
        <li className='Slide3__item col-md-4'>
          <CardSubject
            link='/educazione-civica'
            image={EducazioneCivica}
            title='Educazione civica'
            description="L'uso della tecnologia nella problematica ambientale."
          />
        </li>
      </ul>
    </div>
  );
};

export default Slide3;
