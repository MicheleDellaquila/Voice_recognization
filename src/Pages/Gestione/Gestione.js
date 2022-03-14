import React from 'react';
import './Gestione.scss';
import Cover from '../../Reusable/Cover/Cover';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import LifeCycle from '../../Containers/LifeCycle/LifeCycle';

const Gestione = () => {
  return (
    <div>
      <div>
        <Header />
        <Cover
          title='Gestione'
          subtitle='Ciclo di vita di un progetto.'
          backgroundColor='#161B21'
        />
      </div>
      <div className='Gestione__tecnology container'>
        <LifeCycle />
        <h1>Fase di un progetto</h1>
        <ul className='Gestione__list'>
          <li>
            <h1 className='Gestione__list-title'>
              Ciclo di vita di un progetto : La fase di avvio
            </h1>
            <p className='Gestione__list-text'>
              Durante questa prima fase di avvio, viene identificato l’obiettivo, o il “bisogno” del
              progetto; questo può essere, ad esempio, la risoluzione di un problema aziendale o
              l’analisi e creazione in concreto di un’opportunità. Una risposta appropriata
              all’esigenza può essere documentata in un business case con le opzioni di soluzione
              raccomandate. Viene condotto quindi uno studio di fattibilità per verificare se
              ciascuna opzione è in linea all’obiettivo e viene determinata una soluzione finale.
            </p>
          </li>
          <li>
            <h1 className='Gestione__list-title'>
              Ciclo di vita di un progetto: La fase di pianificazione
            </h1>
            <p className='Gestione__list-text'>
              In questa fase si parte dall’obiettivo del progetto e si passa a svilupparlo nel modo
              più dettagliato possibile, pianificando gli step necessari per raggiungere la
              soluzione finale. Vengono quindi identificati i singoli task del progetto, i requisiti
              che le risorse devono possedere e la strategia da seguire. Viene creato un piano di
              progetto che illustra le attività, i compiti e le tempistiche. Il project manager
              coordina la preparazione di un budget di progetto fornendo preventivi di costo per la
              manodopera, le attrezzature ed i materiali, se necessari.
            </p>
          </li>
          <li>
            <h1 className='Gestione__list-title'>
              Ciclo di vita di un progetto: La fase di esecuzione
            </h1>
            <p className='Gestione__list-text'>
              Durante la terza fase, quella dell’implementazione, il piano del progetto viene messo
              in moto e viene eseguito il lavoro in concreto, seguendo gli step strutturati nella
              fase di pianificazione. È importante e fondamentale mantenere il controllo e
              comunicare come – e quando – necessario durante tutta questa fase. Il progresso e
              l’avanzamento viene continuamente monitorato e vengono apportate le opportune
              modifiche e documentate come variazioni rispetto al piano originale. Di qualsiasi
              progetto si parli, un project manager trascorre solitamente la maggior parte del tempo
              in questa fase.
            </p>
          </li>
          <li>
            <h1 className='Gestione__list-title'>
              Ciclo di vita di un progetto: La fase di chiusura
            </h1>
            <p className='Gestione__list-text'>
              Durante questa fase di chiusura, o di completamento, l’accento è posto: sui risultati
              finali. Sulla consegna della documentazione di progetto. Sulla risoluzione dei
              contratti dei fornitori. Sul rilascio delle risorse del progetto. Sulla comunicazione
              della chiusura del progetto a tutti i soggetti interessati. L’ultimo passo che rimane
              è di condurre un’analisi in merito a cosa è andato bene e cosa no. Attraverso questo
              tipo di analisi si guadagna esperienza e conoscenza, fattori che andranno ad aiutare
              il project manager, ed il team in generale, per futuri progetti.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Gestione;
