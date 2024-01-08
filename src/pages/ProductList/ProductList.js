// src/components/ProductList/ProductList.js
import React from 'react';
import { Button, Row, Typography, Col } from 'antd';
import { useCart } from '../../contexts/CartContext';
import products from '../../Api/products.json';
import './ProductList.scss';
import ProductWidget from '../../components/ProductWidget/ProductWidget';

const ProductList = () => {
	const { addToCart, darkMode } = useCart();

	return (
		<Row className={`productList ${darkMode ? 'dark-mode' : ''}`}>
			<Col span={24} className='productListTitleContainer'>
				<Typography.Title level={2} className='productListTitle'>
					Lista de Productos
				</Typography.Title>
			</Col>
			{products.map((product) => (
				<ProductWidget key={product.id} product={product} addToCart={addToCart} />
			))}
		</Row>
	);
};

export default ProductList;
