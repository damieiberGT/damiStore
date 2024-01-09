import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		// fetch(`${process.env.REACT_APP_API_URL}/products`)
		fetch(`https://659cbd27633f9aee7907e263.mockapi.io/damiStore/products`)
			.then((response) => response.json())
			.then((data) => {
				setProductList(data)
			})
			.catch((error) => {
				console.error('Error al obtener datos desde la API', error);
			});
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

	const handleCheckout = () => {
		const updatedProductList = productList.map(product => {
			const cartItem = cartItems.find(item => item.id === product.id);

			if (cartItem) {
				const remainingQuantity = product.amount - cartItem.quantity;

				return { ...product, amount: remainingQuantity };
			}

			return product;
		});

		setProductList(updatedProductList);

		localStorage.setItem('productList', JSON.stringify(updatedProductList));
		clearCart();
	};

	useEffect(() => {
		const totalItems = calculateTotal();
		setCartTotal(totalItems);
	}, [cartItems]);

	const CreateProduct = (postData) => {
		fetch(`https://659cbd27633f9aee7907e263.mockapi.io/damiStore/products`, {
			// fetch(`${process.env.REACT_APP_API_URL}/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Respuesta del servidor:', data);
			})
			.catch((error) => {
				console.error('Error al realizar la solicitud POST:', error);
			});
	}

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, updateQuantity, calculateTotal, clearCart, darkMode, setDarkMode, cartTotal, quantity, setQuantity, handleCheckout, productList, setProductList, CreateProduct }}
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
