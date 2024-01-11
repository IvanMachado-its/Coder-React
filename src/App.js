// src/App.js
import React from 'react';
import NavBar from './src/components/NavBar';
import ItemListContainer from './src/components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestro e-commerce" />
    </div>
  );
}

export default App;
