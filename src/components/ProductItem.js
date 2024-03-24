import React from 'react';

const ProductItem = ({ product, onAddToCart }) => (
  <div className="product-item">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductItem;