// src/pages/ProductList/ProductList.js
import React, { useState, useEffect } from 'react';
import { Button, Row, Typography, Col } from 'antd';
import { useCart } from '../../contexts/CartContext';
import ProductWidget from '../../components/ProductWidget/ProductWidget';
import products from '../../Api/products.json'

const ProductList = () => {
	const { addToCart, darkMode } = useCart();
	const [productList, setProductList] = useState(products);

	useEffect(() => {
		const storedProductList = JSON.parse(localStorage.getItem('productList'));
		setProductList(storedProductList || []);
	}, [productList]);


	return (
		<Row className={`productList ${darkMode ? 'dark-mode' : ''}`}>
			<Col span={24} className='productListTitleContainer'>
				<Typography.Title level={2} className='productListTitle'>
					Lista de Productos
				</Typography.Title>
			</Col>
			{productList.map((product) => (
				<ProductWidget key={product.id} product={product} addToCart={addToCart} />
			))}
		</Row>
	);
};

export default ProductList;
