import React from 'react';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';

const Informatica = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Informatica'
          subtitle='Descrizione e spiegazione di una base dati'
          backgroundColor='#00539C'
        />
      </div>
    </div>
  );
};

export default Informatica;
