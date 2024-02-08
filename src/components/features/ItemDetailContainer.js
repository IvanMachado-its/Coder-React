// src/components/features/ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../data';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(product => setItem(product))
      .catch(error => {
        console.error('Error al obtener el producto:', error);
        setItem(null);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      {item ? (
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <img src={`https://via.placeholder.com/400x400?text=${item.name}`} className="card-img-top" alt={item.name} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price.toFixed(2)}</p>
                <p className="card-text">{item.description}</p>
                <hr />
                <h6>Detalles:</h6>
                <ul>
                  <li>Categoría: {item.category || 'No especificada'}</li>
                  <li>Material: {item.material || 'No especificado'}</li>
                  <li>Talla: {item.size || 'No especificada'}</li>
                  <li>Color: {item.color || 'No especificado'}</li>
                  <li>Marca: {item.brand || 'No especificada'}</li>
                </ul>
                <hr />
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
