import React from 'react';
import './Orwell.scss';
import OrwellImage from '../../Assets/Images/Italiano.jpg';

const Orwell = () => {
  return (
    <div className='row'>
      <div className='Web__col col-xs-12 col-lg-6'>
        <img className='Web__image' src={OrwellImage} alt='Web 2.0' />
      </div>
      <div className='Web__col col-xs-12 col-lg-5'>
        <div>
          <h1 className='Web__title'>Riflessioni sulla tecnologia e il loro sviluppo futuro.</h1>
          <p className='Web__text'>
            Nel 1984 la Terra è divisa in tre grandi potenze totalitarie: Oceania, Eurasia ed
            Estasia, impegnate in una perenne guerra tra loro, il cui scopo principale è mantenere
            il controllo totale sulla società. In Oceania, la sede dei vari ministeri (Ministero
            della Pace, che presiede alla guerra, dell'Amore, che presiede alla sicurezza, della
            Verità, che presiede alla propaganda e al revisionismo storico, e dell'Abbondanza, che
            presiede all'economia) è Londra, facente parte della provincia di Pista Uno. La società
            è amministrata secondo i principi del Socing (nell'originale inglese, "IngSoc"), il
            Partito Socialista Inglese, ed è governata da un onnipotente partito unico con a capo il
            Grande Fratello (dall'inglese "Big Brother" che letteralmente significa "Fratello
            maggiore", successivamente italianizzato in "Grande Fratello"), un personaggio che
            nessuno ha mai visto di persona (ma che appare in manifesti affissi dappertutto) e che
            tiene costantemente sotto controllo la vita di tutti i cittadini (la sua descrizione
            fisica ricorda Iosif Stalin e Adolf Hitler) . Il totalitarismo del Grande Fratello
            sviluppa caratteristiche dell'Unione Sovietica di Stalin e della Germania preconizzata
            dai nazisti. Il potere è nelle mani di un partito unico, detto semplicemente il
            Partito, a sua volta diviso in Partito Interno (che comprende leader e amministratori) e
            Partito Esterno (formato da burocrati, impiegati e funzionari subalterni). I suoi occhi
            sono i teleschermi, televisori forniti di telecamera, installati per legge in ogni
            abitazione dei membri del Socing, che i membri del Partito Esterno non possono spegnere,
            ma di cui al massimo possono attenuare il volume dell'audio. Questi
            televisori-telecamere, presenti ovunque, oltre a diffondere propaganda 24 ore su 24,
            spiano la vita di qualunque membro del Socing, annullando di fatto ogni possibile forma
            di privacy: in questo modo, il governo può osservare facilmente qualsiasi forma di
            comportamento, anche inconsapevole, che riveli che un individuo abbia pensieri contrari
            all'ortodossia del Partito. Tale meccanismo di osservazione è portato avanti
            continuamente, e su ogni singolo membro del Partito.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orwell;
