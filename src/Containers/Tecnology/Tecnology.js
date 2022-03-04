import React from 'react';
import './Tecnology.scss';
import TecnologyImage from '../../Assets/Images/Tecnology.jpg';

const Tecnology = () => {
  return (
    <div className='row'>
      <div className='Tecnology__col col-xs-12 col-lg-6'>
        <img className='Tecnology__image' src={TecnologyImage} alt='tecnology' />
      </div>
      <div className='Tecnology__col col-xs-12 col-lg-5'>
        <div>
          <h1 className='Tecnology__title'>Tecnologie usate per realizzare Voice recognization.</h1>
          <p className='Tecnology__text'>
            Le tecnologie usate per realizzare <span>Voice recognization</span> sono molteplici.
            Tecnologie web per realizzare l'interfaccia grafica e il machine learning per poter
            realizzare il sistema vocale.
          </p>
          <ul className='Tecnology__list'>
            <li className='Tecnology__list-item'>Html5</li>
            <li className='Tecnology__list-item'>Css3</li>
            <li className='Tecnology__list-item'>Javascript</li>
            <li className='Tecnology__list-item'>React js</li>
            <li className='Tecnology__list-item'>Alan ai</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tecnology;
