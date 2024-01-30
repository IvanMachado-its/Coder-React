// src/components/common/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const categories = [
    { id: 1, name: 'Calzado deportivo' },
    { id: 2, name: 'Ropa casual' },
    { id: 3, name: 'Accesorios' },
    { id: 4, name: 'Electrónica' },
    { id: 5, name: 'Ropa de abrigo' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mi Tienda
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map(category => (
              <li key={category.id} className="nav-item">
                <Link className="nav-link" to={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
