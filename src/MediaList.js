import React from 'react';
import MediaItem from './MediaItem';

function MediaList({ mediaItems, addToCart }) {
  return (
    <div className="media-list">
      {mediaItems.map((item) => (
        <MediaItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default MediaList;