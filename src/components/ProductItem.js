import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-item" 
         onMouseEnter={() => setShowDescription(true)} 
         onMouseLeave={() => setShowDescription(false)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
