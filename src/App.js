import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
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
