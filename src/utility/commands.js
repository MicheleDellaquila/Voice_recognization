import audio from '../assets/audio.mp3';
import presentazione from '../assets/presentazione.mp3';

const commands = [
  {
    command: 'Ciao jarvis',
    callback: () => {
      new Audio(presentazione).play();
    },
  },
  {
    command: ['Jarvis andiamo su informatica', 'Jarvis andiamo a informatica'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/informatica');
      }, 3000);
    },
  },
  {
    command: [
      'Jarvis andiamo su tecnologia e progettazione',
      'Jarvis andiamo a tecnologia e progettazione',
    ],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/tpsit');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su sistemi e reti', 'Jarvis andiamo a sistemi e reti'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/sistemi-reti');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su italiano', 'Jarvis andiamo a italiano'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/italiano');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su storia', 'Jarvis andiamo a storia'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/storia');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su gestione', 'Jarvis andiamo a gestione'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/gestione');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su inglese', 'Jarvis andiamo a inglese'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/inglese');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su pcto', 'Jarvis andiamo a pcto'],
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/pcto');
      }, 3000);
    },
  },
  {
    command: ['Jarvis andiamo su educazione civica', 'Jarvis andiamo a educazione civica'],
    callback: () => {
      window.location.assign('http://localhost:3000/educazione-civica');
      setTimeout(() => {
        new Audio(audio).play();
      }, 3000);
    },
  },
  {
    command: 'Jarvis torna indietro',
    callback: () => {
      new Audio(audio).play();
      setTimeout(() => {
        window.location.assign('http://localhost:3000/');
      }, 3000);
    },
  },
];

export default commands;
