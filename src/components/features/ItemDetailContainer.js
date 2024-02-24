// src/components/features/ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { getProduct } from '../../data';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const product = await getProduct(id);
        setItem(product);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    const itemToAdd = {
      ...item,
      quantity: quantity,
    };
    addToCart(itemToAdd);
    setQuantity(1); 
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mt-4">
      {item ? (
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`https://via.placeholder.com/400x400?text=${item.name}`}
                className="card-img-top"
                alt={item.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price ? item.price.toFixed(2) : 'Precio no disponible'}</p>
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
                <ItemQuantitySelector
                  quantity={quantity}
                  onIncrease={handleQuantityIncrease}
                  onDecrease={handleQuantityDecrease}
                />
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  Agregar al carrito
                </button>
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
