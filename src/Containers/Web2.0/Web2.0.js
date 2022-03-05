import React from 'react';
import './Web2.0.scss';
import Sistemi from '../../Assets/Images/Sistemi.jpg';

const Web = () => {
  return (
    <div className='row'>
      <div className='Web__col col-xs-12 col-lg-6'>
        <img className='Web__image' src={Sistemi} alt='Web 2.0' />
      </div>
      <div className='Web__col col-xs-12 col-lg-5'>
        <div>
          <h1 className='Web__title'>Web 2.0, cos'è e quali sono i suoi utilizzi.</h1>
          <p className='Web__text'>
            Il web 2.0 è un termine che indica un'evoluzione di internet. Quello che chiamiamo Web
            1.0 era formato prevalentemente da siti internet statici senza la possibilità di
            interazionesia di utenti che di altri siti. Con il Web 2.0 il navigatore diventa
            protagonista. Pubblicare contenuti e diffonderli su internet non è più riservato a pochi
            ed esperti di html. Nascono siti come: Wikipedia, Youtube, Facebook, Myspace ed altri
            dove, a farla da padroni sono gli utenti, inserendo in piena autonomia: contenuti foto,
            filmati, testi, e condividendoli in rete. Nell'erogare informazioni i Blog hanno
            acquisito una certa importanza. Il visitatore può facilmente commentare quanto legge,e
            comunicarlo agli altri lettori. Questa introduzione fatta dal web 2.0 è una rivoluzione
            nel comunicare. Si passa dalla comunicazioneone-to-many (uno a molti) a many-to-many
            (molti a molti). Se riprendiamo il discorso fatto con i blog aziendali, quello che ora
            dice l'azienda può essere messo in discussione dal cliente, in una comunicazione diretta
            all'azienda ma aperta a tutti che possono intervenire. Questo potrebbe sembrare un
            minimo cambiamento, ma in effetti porta la comunicazione ad essere trasparente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web;
