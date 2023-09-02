import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import Bikes from '../pages/Bikes';

function Pages() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Cars" element={<Cars />} />
      <Route path="/Bikes" element={<Bikes />} />
    </Routes>
  );
}

export default Pages;
