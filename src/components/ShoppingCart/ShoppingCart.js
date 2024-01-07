// src/components/ShoppingCart/ShoppingCart.js
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import './ShoppingCart.scss';

const ShoppingCart = () => {
	const { cartItems, updateQuantity, calculateTotal, handleCheckout, clearCart, darkMode } = useCart();

	const handleQuantityChange = (productId, newQuantity) => {
		updateQuantity(productId, newQuantity);
	};

	const handleClearCart = () => {
		clearCart();
	};

	return (
		<div className={`shopping-cart ${darkMode ? 'dark-mode' : ''}`}>
			<h2>Carrito de Compras</h2>
			{cartItems.map((item) => (
				<div key={item.id} className="cart-item">
					<p>{item.name} - ${item.price} - Cantidad: {item.quantity}</p>
					<input
						type="number"
						value={item.quantity}
						onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
					/>
				</div>
			))}
			<p>Total: ${calculateTotal()}</p>
			<button onClick={handleClearCart}>Limpiar Carrito</button>
			<button onClick={handleCheckout}>Comprar</button>
		</div>
	);
};

export default ShoppingCart;
