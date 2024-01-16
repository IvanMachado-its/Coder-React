import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Mi Tienda</span>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span className="nav-link">Inicio</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Productos</span>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
