import React, { Fragment } from 'react';
import './heroContent.scss';
import Javascript from '../../../assets/icons/js.png';
import css from '../../../assets/icons/css.png';
import html from '../../../assets/icons/html-5.png';

const HeroContent = () => {
  return (
    <Fragment>
      <h1 className='HeroContent__title'>
        Movie project - Tecnologie che compongono il mio progetto
      </h1>
      <p className='HeroContent__text'>
        Esploriamo tramite la progettazione del progetto Movie, le tecnologie che compongono il mio
        sito web e la loro applicazione.
      </p>
      <ul className='HeroContent__list'>
        <li className='HeroContent__list-item'>
          <img src={Javascript} width={42} alt="javascript" />
          <p className='HeroContent__item-text'>Javascript</p>
        </li>
        <li className='HeroContent__list-item'>
          <img src={html} width={42} alt="javascript" />
          <p className='HeroContent__item-text'>Html5</p>
        </li>
        <li className='HeroContent__list-item'>
          <img src={css} width={42} alt="javascript" />
          <p className='HeroContent__item-text'>Css3</p>
        </li>
      </ul>
      <div className='HeroContent__btnContainer'>
        <button className='HeroContent__btnContainer-btn'>
          <a
            href='http://localhost:8888/Movie/Frontend/'
            target='_blank'
            rel='noreferrer'
            className='HeroContent__btn-link'
          >
            Movie project
          </a>
        </button>
      </div>
    </Fragment>
  );
};

export default HeroContent;
