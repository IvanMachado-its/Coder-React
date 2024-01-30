// src/components/features/Item.js
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <Link to={`/item/${item.id}`}>Detalles</Link>
    </div>
  );
};

export default Item;
