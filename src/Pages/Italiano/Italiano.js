import React from 'react';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';

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
    </div>
  );
};

export default Italiano;
