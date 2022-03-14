import React from 'react';
import './LifeCycle.scss';
import CicloVita from '../../Assets/Images/CicloVita.png';

const LifeCycle = () => {
  return (
    <div className='row'>
      <div className='LifeCycle__col col-xs-12 col-lg-6'>
        <img className='LifeCycle__image' src={CicloVita} alt='Gestione progetto' />
      </div>
      <div className='LifeCycle__col col-xs-12 col-lg-5'>
        <div>
          <h1 className='LifeCycle__title'>Ciclo di vita di un progetto: fasi e caratteristiche</h1>
          <p className='LifeCycle__text'>
            Il ciclo di vita di un progetto è composto da quattro fasi principali attraversando le
            quali Il Project Manager e il suo Team cercano di raggiungere gli obiettivi che il
            progetto stesso si pone. Le quattro fasi che scandiscono la vita del progetto sono:
            concezione/avvio, pianificazione, esecuzione/implementazione e chiusura. Ogni progetto
            ha quindi un inizio, un periodo centrale, un completamento e una fase finale (di
            successo o no).Per ogni fase o attività del ciclo di vita, il project manager deve avere
            una cose chiare in mente: Gli obiettivi di ogni fase di progetto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeCycle;
