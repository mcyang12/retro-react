import React from 'react';

function MediaItem({ item, addToCart }) {
  const { title, type } = item;

  return (
    <div className="media-item">
      <h3>{title}</h3>
      <p>Type: {type}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default MediaItem;