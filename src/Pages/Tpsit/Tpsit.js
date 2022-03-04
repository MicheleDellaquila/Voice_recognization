import React from 'react';
import './Tpsit.scss';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';
import Tecnology from '../../Containers/Tecnology/Tecnology';
import Footer from '../../Containers/Footer/Footer';

const Tpsit = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Tpsit'
          subtitle='React js. Quali tecnologie compone il mio sito web.'
          backgroundColor='#00203F'
        />
      </div>
      <div className='Tpsit__tecnology container'>
        <Tecnology />
      </div>
      <Footer />
    </div>
  );
};

export default Tpsit;
