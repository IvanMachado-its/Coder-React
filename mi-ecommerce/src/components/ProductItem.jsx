// ProductItem.jsx
import React from 'react';

const ProductItem = ({ producto, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={`https://via.placeholder.com/150?text=${producto.nombre}`}
          className="card-img-top"
          alt={producto.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: ${producto.precio}</p>
          <button
            onClick={() => addToCart(producto)}
            className="btn btn-primary"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
