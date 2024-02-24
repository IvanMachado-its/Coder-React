// src/components/features/ShoppingCartPage.js
import React from 'react';
import { useCart } from '../../CartContext';

const ShoppingCartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotalPrice = item.price ? parseFloat(item.price) * item.quantity : 0;
      return total + itemTotalPrice;
    }, 0).toFixed(2);
  };

  const handleBuy = () => {
    alert('Compra realizada con éxito');
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <ul className="list-group">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="item-details">
              <img
                src={`https://via.placeholder.com/50x50?text=${item.name}`}
                alt={item.name}
                className="item-image"
              />
              <span className="item-description">
                <strong>{item.name}</strong>
                <br />
                {item.description}
              </span>
            </div>
            <div>
              ${item.price ? item.price.toFixed(2) : 'Precio no disponible'} x {item.quantity}
              <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => removeFromCart(item.id)}
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total mt-3">Total: ${calculateTotal()}</div>
      <button className="btn btn-success mt-3" onClick={handleBuy}>
        Comprar
      </button>
    </div>
  );
};

export default ShoppingCartPage;
