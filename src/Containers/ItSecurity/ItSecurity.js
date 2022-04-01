import React from 'react';
import './ItSecurity.scss';
import Inglese from '../../Assets/Images/Sistemi.jpg';

const ItSecurity = () => {
  return (
    <div className='row'>
      <div className='Web__col col-xs-12 col-lg-6'>
        <img className='Web__image' src={Inglese} alt='Web 2.0' />
      </div>
      <div className='Web__col col-xs-12 col-lg-5'>
        <div>
          <h1 className='Web__title'>Riflessioni sulla tecnologia e il loro sviluppo futuro.</h1>
          <p className='Web__text'>
            La sicurezza informatica (in inglese information security) è l'insieme dei mezzi, delle
            tecnologie e delle procedure tesi alla protezione dei sistemi informatici in termini di
            disponibilità, confidenzialità e integrità dei beni o asset informatici. Un sinonimo che
            trova talvolta impiego in questo contesto è cibersicurezza[1] (dall'inglese cyber
            security), termine che più precisamente ne rappresenta una sottoclasse[2], essendo
            quell'ambito della sicurezza informatica che dipende solo dalla tecnologia: con esso si
            enfatizzano spesso qualità di resilienza, robustezza e reattività che una tecnologia
            deve possedere per fronteggiare attacchi mirati a comprometterne il suo corretto
            funzionamento e le sue performance (attacchi cibernetici). Nella sicurezza informatica
            sono coinvolti elementi tecnici, organizzativi, giuridici e umani. Per valutare la
            sicurezza è solitamente necessario individuare le minacce, le vulnerabilità e i rischi
            associati ai beni (asset) informatici, al fine di proteggerli da possibili attacchi
            (interni o esterni) che potrebbero provocare danni diretti o indiretti di impatto
            superiore a una determinata soglia di tollerabilità (es. economico, politico-sociale, di
            reputazione, ecc...) a un'organizzazione. Oltre alle tre fondamentali proprietà
            (disponibilità, riservatezza, integrità) possono essere considerate anche: autenticità,
            non ripudiabilità, responsabilità, affidabilità.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItSecurity;
