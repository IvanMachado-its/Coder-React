// src/components/features/ItemList.js
import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

const products = [
  { id: 1, name: 'Zapatillas Deportivas', price: 99.99 },
  { id: 2, name: 'Camiseta de Algodón', price: 29.99 },
  { id: 3, name: 'Vaqueros Slim Fit', price: 59.99 },
  { id: 4, name: 'Reloj Analógico', price: 79.99 },
  { id: 5, name: 'Bolso de Cuero', price: 49.99 },
  { id: 6, name: 'Gafas de Sol Aviador', price: 39.99 },
  { id: 7, name: 'Auriculares Inalámbricos', price: 89.99 },
  { id: 8, name: 'Chaqueta de Invierno', price: 129.99 },
  { id: 9, name: 'Mochila para Portátil', price: 69.99 },
  { id: 10, name: 'Teclado Mecánico para Gaming', price: 109.99 },
];

const ItemList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Productos</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
