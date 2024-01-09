// src/pages/ProductList/ProductList.js
import React from 'react';
import { Row } from 'antd';
import { useCart } from '../../contexts/CartContext';
import ProductWidget from '../../components/ProductWidget/ProductWidget';
import './ProductList.scss'

const ProductList = () => {
	const { addToCart, darkMode, productList } = useCart();

	return (
		<Row className={`productList ${darkMode ? 'dark-mode' : ''}`}>
			{productList.map((product) => (
				<ProductWidget key={product.id} product={product} addToCart={addToCart} />
			))}
		</Row>
	);
};

export default ProductList;
