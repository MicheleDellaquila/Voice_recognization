import React from 'react';
import './heroTpsit.scss';
import TpsitPage from '../../assets/images/tpsitPage.png';
import HeroContent from './heroContent/heroContent';

const HeroTpsit = () => {
  return (
    <div className='HeroTpsit'>
      <div className='HeroTpsit__container'>
        <div className='HeroTpsit__row'>
          <div className='col-xs-12 col-md-10 col-lg-5'>
            <HeroContent />
          </div>
          <div className='col-xs-12 col-md-10 col-lg-7'>
            <img src={TpsitPage} alt='tpsit' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTpsit;
