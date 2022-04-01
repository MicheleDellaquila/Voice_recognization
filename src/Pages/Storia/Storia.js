import React from 'react';
import './Storia.scss';
import Header from '../../Containers/Header/Header';
import Cover from '../../Reusable/Cover/Cover';
import Footer from '../../Containers/Footer/Footer';
import Tecnology from '../../Containers/TerzaRivoluzioneIndustriale/TerzaRivoluzioneIndustriale';

const Storia = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Storia'
          subtitle='Spiegazione terza rivoluzione industriale.'
          backgroundColor='#FFD662'
        />
      </div>
      <div className='Storia__tecnology container'>
        <Tecnology />
      </div>
      <Footer />
    </div>
  );
};

export default Storia;
