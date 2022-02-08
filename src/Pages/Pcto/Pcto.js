import React from 'react';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';
import Activities from '../../Containers/Activities/Activities';
import Footer from '../../Containers/Footer/Footer';

const Pcto = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <Header />
        <Cover
          title='Alternanza scuola lavoro'
          subtitle='Relazione attività alternanza scuola lavoro.'
          backgroundColor='#011627'
        />
      </div>
      <main className='py-20'>
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default Pcto;