import React from 'react';
import CartWidget from './CartWidget'; // Asegúrate de que la ruta sea correcta

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Mi Tienda</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Acerca de</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contacto</a>
          </li>
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
