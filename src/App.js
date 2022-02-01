import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pcto from './Pages/Pcto/Pcto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Alternanza-scuola-lavoro' element={<Pcto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
