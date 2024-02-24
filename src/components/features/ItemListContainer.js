// src/components/features/ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { getProducts, categories } from '../../data';
import ItemQuantitySelector from './ItemQuantitySelector';

// Placeholder image URL (cámbialo con el URL del placeholder que desees)
const placeholderImageUrl = 'https://via.placeholder.com/400x400?text=Placeholder';

const ItemListContainer = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(
          categoryId
            ? data.filter((product) => product.category === categories.find((c) => c.id === Number(categoryId)).name)
            : data
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.id}`);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (product) => {
    const itemToAdd = {
      ...product,
      quantity: quantity,
    };
    addToCart(itemToAdd);
    setQuantity(1); 
  };

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <img src={product.image || placeholderImageUrl} alt={product.name} className="card-img-top" />
                <p className="card-text">${product.price ? product.price.toFixed(2) : 'Precio no disponible'}</p>
                <ItemQuantitySelector
                  quantity={quantity}
                  onIncrease={handleQuantityIncrease}
                  onDecrease={handleQuantityDecrease}
                />
                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                  Agregar al carrito
                </button>
                <Link to={`/item/${product.id}`} className="btn btn-link">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
