import React from 'react';
import './italiano.scss';
import HeroItaliano from '../../containers/heroItaliano/heroItaliano';
import MattiaPascal from '../../containers/mattiaPascal/mattiaPascal';

const Italiano = () => {
  return (
    <div className='Italiano'>
      <HeroItaliano />
      <MattiaPascal />
    </div>
  );
};

export default Italiano;
