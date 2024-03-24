import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import productsData from '../data/products'; 
import Header from './Header';
import Footer from './Footer';


const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => {
      return prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity === 1) return acc; 
          return [...acc, { ...item, quantity: item.quantity - 1 }]; 
        }
        return [...acc, item]; 
      }, []);
    });
  };

  return (
    <>
    <Header />
    
    <div className="product-page">
      <ProductList products={productsData} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;