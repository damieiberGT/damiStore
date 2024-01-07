// src/components/ProductList/ProductList.js
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import products from '../../Api/products.json';
import './ProductList.scss';

const ProductList = () => {
	const { addToCart, darkMode } = useCart();

	return (
		<div className={`product-list ${darkMode ? 'dark-mode' : ''}`}>
			<h2>Lista de Productos</h2>
			{products.map((product) => (
				<div key={product.id} className="product">
					<p>
						{product.name} - ${product.price}
					</p>
					<button onClick={() => addToCart(product)}>Agregar al carrito</button>
				</div>
			))}
		</div>
	);
};

export default ProductList;
