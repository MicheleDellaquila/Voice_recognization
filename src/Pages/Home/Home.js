import React from 'react';
import './home.scss';
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Footer from '../../containers/footer/footer';
import useSpeech from '../../hooks/useSpeech';

const Home = () => {
  const { isSupport } = useSpeech();

  // if browser not support speech
  if (!isSupport) {
    alert('Microfono non supportato');
    return null;
  }

  return (
    <div className='Home'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
