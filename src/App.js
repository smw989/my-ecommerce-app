// In App.js or where you define your routes
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './ProductPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; // Assuming you have a HomePage component
import { useAuth } from './AuthProvider'; // Assuming you have an AuthProvider for context

function App() {
  const { isAuthenticated } = useAuth(); // Get the authentication status from context

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={
          isAuthenticated ? <ProductPage /> : <Navigate to="/login" replace />
        } />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
