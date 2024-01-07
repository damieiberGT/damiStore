import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from './components/Footer/Footer';
import { CartProvider } from './contexts/CartContext';

import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Navbar />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/carrito" element={<ShoppingCart />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
