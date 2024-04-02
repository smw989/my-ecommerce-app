import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/products') // Make sure the URL matches your backend's endpoint
      .then(response => {
        setProducts(response.data.products); // Adjust based on your actual API response structure
      })
      .catch(error => {
        console.error('There was an error fetching the product data:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Optionally display cart items */}
    </div>
  );
};

export default ProductPage;
