import React from 'react';
import './storia.scss';
import HeroStoria from '../../containers/heroStoria/heroStoria';
import PrimaRivoluzioneIndustriale from '../../containers/primaRivoluzioneIndustriale/primaRivoluzioneIndustriale';

const Storia = () => {
  return (
    <div className='Storia'>
      <HeroStoria />
      <PrimaRivoluzioneIndustriale />
    </div>
  );
};

export default Storia;
