// src/contexts/CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem('cartItems'));

		if (storedCart) {
			setCartItems(storedCart);
		}
	}, []);

	const addToCart = (product) => {
		const existingItem = cartItems.find(item => item.id === product.id);

		if (existingItem) {
			setCartItems(prevCart => prevCart.map(item => (
				item.id === existingItem.id ? { ...item, quantity: item.quantity + product.quantity } : item
			)));
		} else {
			setCartItems(prevCart => [...prevCart, { ...product, quantity: product.quantity }]);
		}
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
		console.log('addCart', cartItems);
	};

	const updateQuantity = (productId, quantity) => {
		setCartItems(prevCart =>
			prevCart.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			)
		);
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
		console.log('updateCart', cartItems);
	};

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.quantity,
			0
		);
	};

	const clearCart = () => {
		setCartItems([]);
		localStorage.removeItem('cartItems');
	};

	useEffect(() => {
		const totalItems = calculateTotal();
		setCartTotal(totalItems);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, updateQuantity, calculateTotal, clearCart, darkMode, setDarkMode, cartTotal }}
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
