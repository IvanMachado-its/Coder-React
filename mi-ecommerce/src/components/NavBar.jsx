import React, { useState } from 'react';
import Cart from './Cart';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = ({ toggleCart }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
    toggleCart();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Mi Tienda
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoría 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoría 2
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary ml-auto" onClick={handleCartToggle}>
          Ver Carrito
        </button>
        <CartWidget />
        {showCart && <Cart />}
      </div>
    </nav>
  );
};

export default NavBar;
