// Checkout.js
import React from 'react';
import { useCart } from '../CartContext';

const Checkout = ({ onCheckout }) => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      <button onClick={onCheckout}>Realizar Pago</button>
    </div>
  );
};

export default Checkout;