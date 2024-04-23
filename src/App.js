import React, { useState } from 'react';
import MediaList from './MediaList';
import mediaItems from './mediaItems';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`${item.title} added to cart.`);
  };

  return (
    <body>
    <div className="App">
      <h1>Retro Media Store</h1>
      <MediaList mediaItems={mediaItems} addToCart={addToCart} />
    </div>
    </body>
  );
}

export default App;