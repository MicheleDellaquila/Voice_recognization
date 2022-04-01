import React from 'react';
import './Italiano.scss';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import Orwell from '../../Containers/Orwell/Orwell';

const Italiano = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Italiano'
          subtitle='Riflessioni sulla tecnologia e il loro sviluppo futuro.'
          backgroundColor='#D2302C'
        />
      </div>
      <div className='Italiano__tecnology container'>
        <Orwell />
      </div>
      <Footer />
    </div>
  );
};

export default Italiano;
