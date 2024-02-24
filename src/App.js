// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/features/ItemListContainer';
import ItemDetailContainer from './components/features/ItemDetailContainer';
import ShoppingCartPage from './components/features/ShoppingCartPage'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<ShoppingCartPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
