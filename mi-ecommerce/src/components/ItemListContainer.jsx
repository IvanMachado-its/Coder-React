// ItemListContainer.js
import React from 'react';
import ProductList from './ProductList';

const ItemListContainer = ({ greeting, addToCart }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos Destacados</h2>
      <ProductList addToCart={addToCart} />
      <div className="mt-4">
        <p>{greeting}</p>
      </div>
    </div>
  );
};

export default ItemListContainer;
