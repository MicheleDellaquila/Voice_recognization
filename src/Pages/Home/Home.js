import React from 'react';
import './home.scss';
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Footer from '../../containers/footer/footer';

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
