import React from 'react';
import './Sistemi.scss';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import Web from '../../Containers/Web2.0/Web2.0';

const Sistemi = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Sistemi'
          subtitle="Web 2.0, cos'è e quali sono i suoi utilizzi."
          backgroundColor='#CC313D'
        />
      </div>
      <div className='Sistemi__tecnology container'>
        <Web />
      </div>
      <Footer />
    </div>
  );
};

export default Sistemi;
