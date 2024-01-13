import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';  // Importa tu archivo de estilos personalizados

const Cart = ({ cart, removeFromCart }) => {
  const cartItems = cart || [];

  return (
    <div className="container mt-4 cart-container">
      <h2 className="mb-4">Carrito de Compras</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center cart-item"
          >
            <div className="item-info">
              {item.name} - ${item.price}
            </div>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4">Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
};

export default Cart;
