import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Home from './pages/home/home';
import Informatica from './pages/informatica/informatica';
import Tpsit from './pages/tpsit/tpsit';
import Sistemi from './pages/sistemi/sistemi';
import Italiano from './pages/italiano/italiano';
import Storia from './pages/storia/storia';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/informatica' element={<Informatica />} />
        <Route path='/tpsit' element={<Tpsit />} />
        <Route path='/sistemi-reti' element={<Sistemi />} />
        <Route path='/italiano' element={<Italiano />} />
        <Route path='/storia' element={<Storia />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
