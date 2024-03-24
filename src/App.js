import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductPage from './components/ProductPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
