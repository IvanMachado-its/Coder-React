
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {/* Aquí iría la lista de productos, pero por ahora solo mostramos el mensaje */}
    </div>
  );
};

export default ItemListContainer;

