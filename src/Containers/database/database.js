import React from 'react';
import './database.scss';
import DatabaseImage from '../../assets/images/informatica.jpg';
import { Element } from 'react-scroll';

const Database = () => {
  return (
    <Element name='section1' className='Database'>
      <div className='Database__container'>
        <div className='Database__row'>
          <div className='col-xs-12 col-lg-6'>
            <img className='Database__image' src={DatabaseImage} alt='Database' />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <h1 className='Database__title'>Base dati (Database)</h1>
            <p className='Database__text'>
              La locuzione può anche indicare contemporaneamente: l'archivio a livello fisico
              (hardware) cioè il sistema con i supporti di memorizzazione (storage, es. dischi
              rigidi) che contengono i dati stessi, deputati cioè alla persistenza dei dati, e il
              processore per l'elaborazione di questi (database server); l'archivio a livello
              logico, cioè i dati strutturati, e la parte software, cioè il database management
              system (DBMS) ovvero quella vasta categoria di applicazioni che consentono la
              creazione, la manipolazione (gestione) e l'interrogazione efficiente dei dati.
              Informalmente e impropriamente la parola "banca dati" viene spesso usata per indicare
              il database management system (DBMS) riferendosi dunque alla sola parte software. Un
              client di banca dati lato client interagisce con il DBMS server e quindi anche con la
              banca dati in senso fisico. Nelle banche dati più moderne, ovvero quelle basate sul
              modello relazionale, i dati vengono suddivisi in apposite tabelle per argomenti e poi
              questi argomenti vengono suddivisi per categorie (campi) con tutte le possibili
              operazioni di cui sopra. Questa suddivisione e questa funzionalità rendono le basi di
              dati notevolmente più efficienti rispetto a un archivio di dati creato per esempio
              tramite il file system di un sistema operativo su un computer, almeno per la gestione
              di dati complessi.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Database;
