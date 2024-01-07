// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [darkMode, setDarkMode] = useState(false);

	const addToCart = (product) => {
		setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
	};

	const updateQuantity = (productId, quantity) => {
		setCartItems((prevCart) =>
			prevCart.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			)
		);
	};

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, updateQuantity, calculateTotal, clearCart, darkMode, setDarkMode }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};
