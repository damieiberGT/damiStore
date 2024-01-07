import React from 'react';

const ShoppingCart = ({ cartItems, updateQuantity, calculateTotal, handleCheckout }) => {
	return (
		<div>
			<h2>Carrito de Compras</h2>
			{cartItems.map(item => (
				<div key={item.id} className="cart-item">
					<p>{item.name} - ${item.price} - Cantidad: {item.quantity}</p>
					<input
						type="number"
						value={item.quantity}
						onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
					/>
				</div>
			))}
			<p>Total: ${calculateTotal()}</p>
			<button onClick={handleCheckout}>Comprar</button>
		</div>
	);
};

export default ShoppingCart;
