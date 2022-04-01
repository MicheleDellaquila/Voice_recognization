import React from 'react';
import './Inglese.scss';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import ItSecurity from '../../Containers/ItSecurity/ItSecurity';

const Inglese = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover title='Inglese' subtitle='inglese' backgroundColor='#9CC3D5' />
      </div>
      <div className='Inglese__tecnology container'>
        <ItSecurity />
      </div>
      <Footer />
    </div>
  );
};

export default Inglese;
