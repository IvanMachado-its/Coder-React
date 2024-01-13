
import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart, searchProducts }) => {
  const [productos] = useState([
    { id: 1, name: 'Laptop HP Pavilion', price: 899.99 },
    { id: 2, name: 'Smartphone Samsung Galaxy S21', price: 1099.99 },
    { id: 3, name: 'Auriculares Sony WH-1000XM4', price: 349.99 },
    { id: 4, name: 'Libro "Cien años de soledad"', price: 29.99 },
    { id: 5, name: 'Televisor 4K LG OLED', price: 1499.99 },
    { id: 6, name: 'Cámara DSLR Canon EOS 90D', price: 1199.99 },
    { id: 7, name: 'Zapatillas Nike Air Max', price: 129.99 },
    { id: 8, name: 'Mesa de comedor de roble', price: 499.99 },
    { id: 9, name: 'Set de utensilios de cocina de acero inoxidable', price: 79.99 },
    { id: 10, name: 'Reloj inteligente Apple Watch Series 6', price: 399.99 },
  ]);

  const renderizarProductos = () => {
    return productos.map((producto) => (
      <ProductItem key={producto.id} producto={producto} addToCart={addToCart} />
    ));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos Destacados</h2>
      <div className="row">{renderizarProductos()}</div>
    </div>
  );
};

export default ProductList;
