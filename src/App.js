import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pcto from './Pages/Pcto/Pcto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Alternanza-scuola-lavoro' element={<Pcto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
