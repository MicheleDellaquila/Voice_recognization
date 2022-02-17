import React from 'react';
import './Activities.scss';
import { CardActivities } from '../../Components/CardActivities/CardActivities';
import ListActivitie from '../../Utility/ListActivitie';
import { Slide } from 'react-awesome-reveal';

const Activities = () => {
  return (
    <div className='Activities container'>
      <h1 className='Activities__title'>Attività pcto</h1>
      <div className='flex mt-16'>
        <ul className='Activities__list col-xs-12 col-lg-10 col-xl-8 mx-auto'>
          {ListActivitie.map((activitie, index) => {
            return (
              <li className='Activities__item'>
                <Slide direction={index % 2 === 0 ? 'right' : 'left'}>
                  <CardActivities
                    title={activitie.title}
                    description={activitie.description}
                    month={activitie.month}
                    day={activitie.day}
                    year={activitie.year}
                    direction={index % 2 === 0 ? 'right' : 'left'}
                  />
                </Slide>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Activities;
