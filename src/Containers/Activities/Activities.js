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
              month='Feb'
              day='04'
              year='2020'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Superarè'
              description='Mappatura barriere archittetoniche.'
              month='Set'
              day='06'
              year='2020'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Cittadini digitali'
              description="Webinar sull'esser un cittadino digitale. Quali doveri e quali diritto esso ha."
              month='Oct'
              day='01'
              year='2022'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Make faire'
              description="Evento europeo sull' innovazione. E' una finestra sul futuro."
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Orientamento'
              description='Orientamento università della Puglia.'
              month='Oct'
              day='01'
              year='2022'
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
              description='Orientamento università della Puglia'
              month='MAG'
              day='06'
              year='2021'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title=''
              description='La genitorialità al tempo del covid'
              month='FEB'
              day='09'
              year='2021'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Salone dello studente'
              description='Orientamente esterno , online , presso le varie realta università della nostra nazione.'
              month='OCT'
              day='04'
              year='2021'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Biblioteca'
              description='Sistemazione e creazione sito web per digitalizzare la biblioteca scolastica.'
              month='OCT'
              day='11'
              year='2021'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Shoa'
              description="Giornata della memoria per la commemorazione dell'olocausto contro l'ebrei."
              month='GEN'
              day='27'
              year='2021'
              direction='right'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activities;
