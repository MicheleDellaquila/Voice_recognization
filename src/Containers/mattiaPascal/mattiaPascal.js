import React from 'react';
import './mattiaPascal.scss';
import mattiaPascal from '../../assets/images/mattiaPascal.jpg';
import { Element } from 'react-scroll';

const MattiaPascal = () => {
  return (
    <Element name='section1' className='MattiaPascal'>
      <div className='MattiaPascal__container'>
        <div className='MattiaPascal__row'>
          <div className='col-xs-12 col-lg-4'>
            <img src={mattiaPascal} alt='mattia pascal' />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <h1 className='MattiaPascal__title'>Il fu Mattia Pascal</h1>
            <p className='MattiaPascal__text'>
              Il fu Mattia Pascal è un celebre romanzo di Luigi Pirandello che apparve dapprima a
              puntate sulla rivista Nuova Antologia nel 1904 e che fu pubblicato in volume nello
              stesso anno. Fu il primo grande successo di Pirandello, scritto nelle notti di veglia
              alla moglie, Maria Antonietta Portulano, paralizzata alle gambe. Mattia Pascal vive a
              Miragno, dove il padre ha lasciato in eredità la miniera di zolfo alla moglie e ai due
              figli. Batta Malagna, un disonesto amministratore, si interessa di gestire il
              patrimonio. Questi sposa Oliva, ragazza che Mattia conosce bene e di cui era
              invaghito. L'amico Pomino dice al protagonista di essersi innamorato di una ragazza,
              Romilda, figlia di Marianna Dondi, vedova Pescatore, e cugina di Malagna.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default MattiaPascal;
