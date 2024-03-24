import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name}/>
          <div className='cart-item-description'>
            <h4>{item.name}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <h3>Total (in cart): ${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
