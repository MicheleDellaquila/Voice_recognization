import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pcto from './Pages/Pcto/Pcto';
import Italiano from './Pages/Italiano/Italiano';
import Storia from './Pages/Storia/Storia';
import Informatica from './Pages/Informatica/Informatica';
import Sistemi from './Pages/Sistemi/Sistemi';
import Tpsit from './Pages/Tpsit/Tpsit';
import Inglese from './Pages/Inglese/Inglese';
import Gestione from './Pages/Gestione/Gestione';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/alternanza-scuola-lavoro' element={<Pcto />} />
      <Route path='/italiano' element={<Italiano />} />
      <Route path='/storia' element={<Storia />} />
      <Route path='/informatica' element={<Informatica />} />
      <Route path='/sistemi' element={<Sistemi />} />
      <Route path='/tpsit' element={<Tpsit />} />
      <Route path='/inglese' element={<Inglese />} />
      <Route path='/gestione' element={<Gestione />} />
    </Routes>
  );
};

export default App;
