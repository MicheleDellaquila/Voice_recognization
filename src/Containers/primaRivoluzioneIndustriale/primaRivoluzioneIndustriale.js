import React from 'react';
import './primaRivoluzioneIndustriale.scss';
import primaRivoluzioneIndustriale from '../../assets/images/primaRivoluzioneIndustriale2.jpg';
import { Element } from 'react-scroll';

const PrimaRivoluzioneIndustriale = () => {
  return (
    <Element name='section1' className='PrimaRivoluzioneIndustriale'>
      <div className='PrimaRivoluzioneIndustriale__container'>
        <div className='PrimaRivoluzioneIndustriale__row'>
          <div className='col-xs-12 col-lg-4'>
            <img src={primaRivoluzioneIndustriale} alt='Prima rivoluzione industriale' />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <h1 className='PrimaRivoluzioneIndustriale__title'>
              Spiegazione prima rivoluzione industriale
            </h1>
            <p className='PrimaRivoluzioneIndustriale__text'>
              La rivoluzione industriale fu un processo di evoluzione economica e di
              industrializzazione di società che da agricole-artigianali-commerciali si
              trasformarono in sistemi industriali caratterizzati dall'uso generalizzato di macchine
              azionate da energia meccanica e dall'utilizzo di nuove fonti energetiche inanimate
              (come, ad esempio, i combustibili fossili), il tutto favorito da una forte componente
              di innovazione tecnologica e accompagnato da fenomeni di crescita, sviluppo economico
              e profonde modificazioni socio-culturali e politiche. È consuetudine distinguere tra
              prima e seconda rivoluzione industriale. La prima interessò prevalentemente il settore
              tessile-metallurgico con l'introduzione della spoletta volante e della macchina a
              vapore nella seconda metà del '700. La seconda rivoluzione industriale viene fatta
              convenzionalmente partire dal 1870 con l'introduzione dell'elettricità, dei prodotti
              chimici e del petrolio. Talvolta ci si riferisce agli effetti dello svolgimento
              massiccio dell'elettronica, delle telecomunicazioni e dell'informatica nell'industria
              come alla terza rivoluzione industriale, che viene fatta partire dal 1970. La
              rivoluzione industriale comportò una profonda e irreversibile trasformazione che partì
              dal sistema produttivo fino a coinvolgere il sistema economico nel suo insieme e
              l'intero sistema sociale.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default PrimaRivoluzioneIndustriale;
