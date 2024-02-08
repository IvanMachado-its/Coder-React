import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { getProducts, categories } from '../../data';

const ItemListContainer = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);

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

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price ? product.price.toFixed(2) : 'Precio no disponible'}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
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
