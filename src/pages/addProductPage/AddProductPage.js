import React from 'react';
import AddProductForm from '../../components/addProductForm/AddProductForm';
import { useCart } from '../../contexts/CartContext';
import { Col, Row, Typography } from 'antd';
import './AddpProduct.scss'

const AddProductPage = ({ onAddProduct }) => {
	const { darkMode } = useCart();

	const handleAddProduct = (newProduct) => {
		onAddProduct(newProduct);
	};

	return (
		<div className={`addProductContainer ${darkMode ? 'dark-mode' : ''}`}>
			<Row justify={'center'}>
				<Typography.Title level={2} className={`addProductTitle ${darkMode ? 'dark-mode' : ''}`}>
					Agregar Nuevo Producto
				</Typography.Title>
				<Col span={24}>
					<AddProductForm onAddProduct={handleAddProduct} />
				</Col>
			</Row>
		</div>
	);
};

export default AddProductPage;
