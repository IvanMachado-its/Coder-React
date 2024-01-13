// App.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCarrito([...carrito, product]);
    updateCart([...carrito, product]);
    localStorage.setItem('cart', JSON.stringify([...carrito, product]));
  };

  const removeFromCart = (index) => {
    const newCart = [...carrito];
    newCart.splice(index, 1);
    setCarrito(newCart);
    updateCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateCart = (newCart) => {
    let cartHtml = '';
    let totalAmount = 0;

    newCart.forEach((product, index) => {
      cartHtml += (
        <li className="list-group-item" key={index}>
          <span>{product.name} - ${product.price.toFixed(2)}</span>
          <button className="btn btn-danger btn-sm float-right" onClick={() => removeFromCart(index)}>Quitar</button>
        </li>
      );
      totalAmount += product.price;
    });

    setTotal(totalAmount);
    // Actualiza el carrito en tu interfaz aquí
  };

  const searchProducts = (searchInput) => {
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        const filteredProducts = productos.filter(product =>
          product.name.toLowerCase().includes(searchInput) ||
          product.price.toString().includes(searchInput) ||
          product.id.toString().includes(searchInput)
        );
        renderProductList(filteredProducts);
      }, 300)
    );
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Descubre Nuestros Productos</h1>
        <div className="row" id="product-list">
          <ProductList addToCart={addToCart} searchProducts={searchProducts} />
        </div>
        <div>
          <ul className="list-group" id="cart">
            {carrito.map((product, index) => (
              <li className="list-group-item" key={index}>
                <span>{product.name} - ${product.price.toFixed(2)}</span>
                <button className="btn btn-danger btn-sm float-right" onClick={() => removeFromCart(index)}>Quitar</button>
              </li>
            ))}
          </ul>
          <p className="text-center mt-3">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
