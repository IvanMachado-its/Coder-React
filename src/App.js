
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestro e-commerce" />
    </div>
  );
}

export default App;
