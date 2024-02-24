// src/components/common/CartWidget.js
import React, { useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from '../../CartContext';

const CartWidget = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity || 0);
    }, 0).toFixed(2);
  };

  const renderCartItem = (item) => (
    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
      {item.name} - ${item.price * item.quantity || 0}
      <span className="badge badge-pill badge-primary">{item.quantity}</span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeFromCart(item.id)}
      >
        <FaTrash />
      </button>
    </li>
  );

  const handleBuy = () => {
    // Lógica de compra (puedes implementar la funcionalidad deseada aquí)
    alert('Compra realizada con éxito');
  };

  return (
    <div className="cart-widget">
      <button className="btn btn-link" onClick={handleToggleCart}>
        <FaShoppingCart />
        <span className="badge badge-pill badge-danger">{cartItems.length}</span>
      </button>

      {isCartOpen && (
        <div className="cart-dropdown">
          <ul className="list-group">
            {cartItems.map(renderCartItem)}
          </ul>
          <div className="total">Total: ${calculateTotal()}</div>
          <button className="btn btn-success btn-block" onClick={handleBuy}>
            Comprar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
