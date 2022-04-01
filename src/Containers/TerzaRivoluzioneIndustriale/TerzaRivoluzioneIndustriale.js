import React from 'react';
import './TerzaRivoluzioneIndustriale.scss';
import Image from '../../Assets/Images/Storia.jpeg';

const TerzaRivoluzioneIndustriale = () => {
  return (
    <div className='row'>
      <div className='Web__col col-xs-12 col-lg-6'>
        <img className='Web__image' src={Image} alt='Web 2.0' />
      </div>
      <div className='Web__col col-xs-12 col-lg-5'>
        <div>
          <h1 className='Web__title'>Spiegazione terza rivoluzione industriale.</h1>
          <p className='Web__text'>
            La terza rivoluzione industriale si differenzia dalla precedente; ha compreso processi
            di trasformazione della produzione di beni che nei Paesi sviluppati occidentali hanno
            coinvolto aspetti sociali ed economici; a partire dalla metà del XX secolo l'innovazione
            tecnologica ha innescato mutamenti che hanno prodotto sviluppo economico e progresso
            sociale, anche se non equamente diffusi; il fenomeno, a partire dalla fine del secolo,
            si è esteso ad altre realtà, in particolare a Cina e India e Stati Uniti d'America. Tra
            le cause della terza rivoluzione industriale si possono annoverare: La crescita, lo
            sviluppo e l'accumulo delle conoscenze scientifiche e tecnologiche già a partire
            dall'inizio del Novecento, spesso nate nel contesto militare delle guerre mondiali della
            prima metà del secolo e successivamente in quello della guerra fredda tra le maggiori
            superpotenze mondiali del dopoguerra, Stati Uniti d'America e Unione Sovietica. Esempio:
            la prima rete telematica che avrebbe unito le università californiane di Los Angeles e
            Santa Barbara, lo Stanford Research Institute e l'Università dello Utah – ARPANET – era
            già in funzione dal 1969, sulla base di un progetto del Dipartimento della Difesa degli
            Stati Uniti. Condizioni politiche assai più stabili nei Paesi occidentali rispetto a
            quelle della prima metà del secolo hanno poi favorito la crescita economica, a partire
            dalla ricostruzione post-bellica, verso settori a quel tempo ancora inesplorati,
            permettendone la diffusione progressiva verso il ceto medio del modello socio-economico
            occidentale. Con la scoperta e lo sfruttamento dell’energia atomica siamo entrati in una
            fase del tutto nuova, quella appunto della terza rivoluzione industriale.[1] E ciò per
            almeno due considerazioni generali: sotto il profilo pacifico lo sfruttamento dell’atomo
            significa la liberazione di un’energia immensa e l'emergere di altrettanto enormi
            problemi legati all'inquinamento; mentre sotto il profilo militare significa che per la
            prima volta l’umanità ha avuto la possibilità di distruggere completamente se stessa e
            il pianeta su cui vive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerzaRivoluzioneIndustriale;
