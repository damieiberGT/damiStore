import React from 'react';
import { useCart } from '../../contexts/CartContext';
import products from '../../Api/products.json';

const ProductList = () => {
	const { addToCart } = useCart();

	return (
		<div>
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
