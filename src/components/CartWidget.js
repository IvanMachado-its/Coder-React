// En el archivo CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'; // Archivo de estilos (crearemos esto más adelante)

const CartWidget = () => {
  const cartItemCount = 5; // Número hardcodeado (puedes cambiarlo según tus necesidades)

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
