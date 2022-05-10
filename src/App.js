import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Home from './pages/home/home';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
