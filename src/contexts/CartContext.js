import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [quantity, setQuantity] = useState(0);


	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem('cartItems'));

		if (storedCart) {
			setCartItems(storedCart);
		}
	}, []);

	const addToCart = (product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);

		if (existingItem) {
			setCartItems((prevCart) =>
				prevCart.map((item) =>
					item.id === existingItem.id ? { ...item, quantity: item.quantity + product.quantity } : item
				)
			);
		} else {
			setCartItems((prevCart) => [...prevCart, { ...product, quantity: product.quantity }]);
		}

		setCartItems((prevCart) => {
			localStorage.setItem('cartItems', JSON.stringify(prevCart));
			return prevCart;
		});
	};
	const updateQuantity = (productId, quantity) => {
		setCartItems((prevCart) =>
			prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
		);

		setCartItems((prevCart) => {
			localStorage.setItem('cartItems', JSON.stringify(prevCart));
			return prevCart;
		});
	};

	const calculateTotal = () => {
		const totalCalculated = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
		return totalCalculated.toLocaleString()
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
			value={{ cartItems, addToCart, updateQuantity, calculateTotal, clearCart, darkMode, setDarkMode, cartTotal, quantity, setQuantity }}
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
