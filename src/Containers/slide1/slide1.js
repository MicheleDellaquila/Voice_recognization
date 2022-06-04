import React from 'react';
import './slide1.scss';
import CardSubject from '../cardSubject/cardSubject';
import Informatica from '../../assets/images/informatica.jpg';
import Tpsit from '../../assets/images/tpsit.jpg';
import Sistemi from '../../assets/images/sistemi.jpg';

const Slide1 = () => {
  return (
    <div className='Slide1' id='slide'>
      <ul className='Slide1__list'>
        <li className='Slide1__item col-xs-12 col-md-4'>
          <CardSubject
            link='/informatica'
            image={Informatica}
            title='Informatica'
            description='Descrizione e spiegazione di una base dati.'
          />
        </li>
        <li className='Slide1__item col-xs-12 col-md-4'>
          <CardSubject
            link='/tpsit'
            image={Tpsit}
            title='Tpsit'
            description='Architettura a tre livelli, perchè è fondamentale conoscerla'
          />
        </li>
        <li className='Slide1__item col-xs-12 col-md-4'>
          <CardSubject
            link='/sistemi-reti'
            image={Sistemi}
            title='Sistemi e Reti'
            description="Web 2.0, cos'è e quali sono i suoi utilizzi."
          />
        </li>
      </ul>
    </div>
  );
};

export default Slide1;
