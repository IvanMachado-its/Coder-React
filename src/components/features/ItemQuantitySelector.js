// src/components/features/ItemQuantitySelector.js
import React from 'react';

const ItemQuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="item-quantity-selector">
      <button className="btn btn-light" onClick={onDecrease} disabled={quantity === 1}>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="btn btn-light" onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
