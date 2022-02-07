import React from 'react';
import './CardActivities.scss';

export const CardActivities = ({ title, description, month, day, year, direction }) => {
  return (
    <div className={`CardActivities CardActivities--${direction}`}>
      <div className='p-5'>
        <h1 className='CardActivities__title'>{title}</h1>
        <h4 className='CardActivities__subtitle'>{description}</h4>
      </div>
      <div className='CardActivities__date px-5'>
        <h5 className='CardActivities__date-month'>{month}</h5>
        <h1 className='CardActivities__date-day'>{day}</h1>
        <h5 className='CardActivities__date-year'>{year}</h5>
      </div>
    </div>
  );
};
