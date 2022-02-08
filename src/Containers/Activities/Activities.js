import React from 'react';
import { CardActivities } from '../../Components/CardActivities/CardActivities';
import './Activities.scss';

const Activities = () => {
  return (
    <div className='Activities container'>
      <h1 className='Activities__title'>Attività pcto</h1>
      <div className='flex mt-16'>
        <ul className='Activities__list col-lg-8 mx-auto'>
          <li className='Activities__item '>
            <CardActivities
              title='Sicurezza'
              description='Corso sulla sicurezza sul posto di lavoro.'
              month='FEB'
              day='04'
              year='2020'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Superarè'
              description='Mappatura barriere archittetoniche Barletta.'
              month='SET'
              day='02'
              year='2020'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Cittadini digitali'
              description="Webinar sull'esser un cittadino digitale. Quali doveri e quali diritto esso ha."
              month='MAG'
              day='17'
              year='2021'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Make faire'
              description="Evento europeo sull' innovazione. E' una finestra sul futuro."
              month='OTT'
              day='08'
              year='2021'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Orientamento universìtà della Puglia'
              description='Orientamento università sul territorio pugliese.'
              month='NOV'
              day='05'
              year='2021'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Safer internet day'
              description='Safer Internet Day è una giornata internazionale di sensibilizzazione per i rischi che comporta utilizzare internet.'
              month='FEB'
              day='09'
              year='2021'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Adolescenti Fragili'
              description='Webinar sulla fragilità degli adolescenti.'
              month='MAG'
              day='06'
              year='2021'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Salone dello studente'
              description='Orientamente esterno , online , presso le varie realta università della nostra nazione.'
              month='OCT'
              day='04'
              year='2021'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Biblioteca'
              description='Sistemazione e creazione sito web per digitalizzare la biblioteca scolastica.'
              month='OCT'
              day='11'
              year='2021'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Shoa'
              description="Giornata della memoria per la commemorazione dell'olocausto contro l'ebrei."
              month='GEN'
              day='27'
              year='2021'
              direction='left'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activities;
