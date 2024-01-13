// Cart.jsx
import React from 'react';

const Cart = ({ Cart, removeFromCart, checkout }) => {
  const renderCartItems = () => {
    return Cart.map((item, index) => (
      <li key={index} className="list-group-item">
        <span>{item.name} - ${item.price.toFixed(2)}</span>
        <button className="btn btn-danger btn-sm float-right" onClick={() => removeFromCart(index)}>
          Quitar
        </button>
      </li>
    ));
  };

  return (
    <div className="cart-container" id="cart-container">
      <div className="cart">
        <h2 className="text-center">Carrito</h2>
        <ul className="list-group" id="cart">
          {renderCartItems()}
        </ul>
        <p className="text-center mt-3">Total: $<span id="total">{calculateTotal(Cart)}</span></p>
        <button className="btn btn-primary btn-block" onClick={checkout}>
          Pagar
        </button>
      </div>
    </div>
  );
};

const calculateTotal = (Cart) => {
  return Cart.reduce((total, item) => total + item.price, 0).toFixed(2);
};

export default Cart;

