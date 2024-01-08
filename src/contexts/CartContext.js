import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [productList, setProductList] = useState([]);


	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem('cartItems'));
		if (storedCart) {
			setCartItems(storedCart);
		}

		const storedProductList = JSON.parse(localStorage.getItem('productList'));

		if (storedProductList) {
			setProductList(storedProductList);
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

	// const handleCheckout = () => {
	// 	const updatedCartItems = cartItems.map(item => {
	// 		const remainingQuantity = item.amount - item.quantity;
	// 		return { ...item, quantity: remainingQuantity, amount: remainingQuantity };
	// 	});
	// 	setCartItems(updatedCartItems);

	// 	console.log('updatedCartItems', updatedCartItems);
	// 	console.log('cartItems', cartItems);

	// 	localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

	// 	clearCart();
	// };

	const handleCheckout = () => {
		const updatedProductList = productList.map(product => {
			const cartItem = cartItems.find(item => item.id === product.id);

			if (cartItem) {
				// Restar la cantidad comprada del total disponible
				const remainingQuantity = product.amount - cartItem.quantity;

				// Actualizar solo la cantidad del producto en la lista sin reemplazar el producto completo
				return { ...product, amount: remainingQuantity };
			}

			// Si el producto no está en el carrito, devolver el producto sin cambios
			return product;
		});

		// Actualizar el estado de productList
		setProductList(updatedProductList);

		// Actualizar el localStorage después de realizar las operaciones necesarias
		localStorage.setItem('productList', JSON.stringify(updatedProductList));

		// Limpiar el carrito después de la compra
		clearCart();
	};

	useEffect(() => {
		const totalItems = calculateTotal();
		setCartTotal(totalItems);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, updateQuantity, calculateTotal, clearCart, darkMode, setDarkMode, cartTotal, quantity, setQuantity, handleCheckout, productList, setProductList }}
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
