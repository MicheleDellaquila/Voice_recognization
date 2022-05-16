import React from 'react';
import './sicurezzaIt.scss';
import Inglese from '../../assets/images/inglese.jpg';
import { Element } from 'react-scroll';

const SicurezzaIt = () => {
  return (
    <Element name='section1' className='SicurezzaIt'>
      <div className='SicurezzaIt__container'>
        <div className='SicurezzaIt__row'>
          <div className='col-xs-12 col-lg-6'>
            <img src={Inglese} alt='inglese' />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <h1 className='SicurezzaIt__title'>Sicurezza informatica, perchè è fondamentale</h1>
            <p className='SicurezzaIt__text'>
              Un sinonimo che trova talvolta impiego in questo contesto è cibersicurezza
              (dall'inglese cyber security), termine che più precisamente ne rappresenta una
              sottoclasse, essendo quell'ambito della sicurezza informatica che dipende solo dalla
              tecnologia: con esso si enfatizzano spesso qualità di resilienza, robustezza e
              reattività che una tecnologia deve possedere per fronteggiare attacchi mirati a
              comprometterne il suo corretto funzionamento e le sue performance. Nella sicurezza
              informatica sono coinvolti elementi tecnici, organizzativi, giuridici e umani. Per
              valutare la sicurezza solitamente è necessario individuare le minacce, le
              vulnerabilità e i rischi associati ai beni informatici, al fine di proteggerli da
              possibili attacchi (interni o esterni) che potrebbero provocare danni diretti o
              indiretti di impatto superiore a una determinata soglia di tollerabilità (es.
              economico, politico-sociale, di reputazione, ecc...) a un'organizzazione. Oltre alle
              tre fondamentali proprietà (disponibilità, riservatezza, integrità) possono essere
              considerate anche: autenticità, non ripudiabilità, responsabilità, affidabilità.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SicurezzaIt;
