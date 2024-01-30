// src/components/common/CartWidget.js
import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { CartContextProvider, useCart } from '../../CartContext';

const CartWidget = () => {
  const { cartItems, removeFromCart } = useCart(); // Ajusta esta línea
  const [isCartOpen, setIsCartOpen] = useState(false);


  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.price ? parseFloat(item.price) : 0;
      return total + itemPrice;
    }, 0).toFixed(2);
  };
  
  const handleBuy = () => {
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
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price ? item.price.toFixed(2) : 'Precio no disponible'}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
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
