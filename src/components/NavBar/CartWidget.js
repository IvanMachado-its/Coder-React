import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  const cartItemCount = 5; // 

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
