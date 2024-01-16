import React from 'react';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/features/ItemListContainer';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <ItemListContainer />
      </div>
    </CartProvider>
  );
}

export default App;
