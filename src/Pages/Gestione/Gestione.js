import React from 'react';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';

const Gestione = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Gestione'
          subtitle='Spiegazione di un organigramma / costruzione progetto'
          backgroundColor='#161B21'
        />
      </div>
    </div>
  );
};

export default Gestione;
