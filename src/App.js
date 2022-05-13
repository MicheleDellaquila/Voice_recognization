import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Home from './pages/home/home';
import Informatica from './pages/informatica/informatica';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/informatica' element={<Informatica />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
