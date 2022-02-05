import React from 'react';
import { CardActivities } from '../../Components/CardActivities/CardActivities';
import './Activities.scss';

const Activities = () => {
  return (
    <div className='Activities container'>
      <h1 className='Activities__title'>Attività pcto</h1>
      <div className='flex mt-16'>
        <ul className='Activities__list col-lg-8 mx-auto'>
          <li className='Activities__item'>
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
              description='Mappatura barriere archittetoniche'
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Cittadini digitali'
              description='Orientamento università della Puglia'
              month='Oct'
              day='01'
              year='2022'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Make faire'
              description='Orientamento università della Puglia'
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Orientamento'
              description='Orientamento università della Puglia'
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Safer internet day'
              description='Orientamento università della Puglia'
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Adolescenti Fragili'
              description='Orientamento università della Puglia'
              month='Oct'
              day='01'
              year='2022'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Safer internet day'
              description='La genitorialità al tempo del covid'
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Salone dello studente'
              description='La genitorialità al tempo del covid'
              month='Oct'
              day='01'
              year='2022'
              direction='right'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Biblioteca'
              description='La genitorialità al tempo del covid'
              month='Oct'
              day='01'
              year='2022'
              direction='left'
            />
          </li>
          <li className='Activities__item'>
            <CardActivities
              title='Biblioteca'
              description='Giornata della memoria'
              month='Oct'
              day='01'
              year='2022'
              direction='right'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activities;
