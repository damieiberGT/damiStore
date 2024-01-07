// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Lógica para agregar productos al carrito
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId, quantity) => {
    // Lógica para actualizar la cantidad de productos en el carrito
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    // Lógica para calcular el total de la compra
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    // Lógica para procesar la compra (puede ir aquí o llamar a una función externa)
    console.log('Compra realizada:', cartItems);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/productos"
              element={<ProductList addToCart={addToCart} />}
            />
            <Route
              path="/carrito"
              element={(
                <ShoppingCart
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  calculateTotal={calculateTotal}
                  handleCheckout={handleCheckout}
                />
              )}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
