import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, message } from 'antd';
import { useCart } from '../../contexts/CartContext';
import './AddProductForm.scss'

const AddProductForm = ({ onAddProduct }) => {
	const { darkMode, CreateProduct } = useCart();
	const [form] = Form.useForm();
	const [productList, setProductList] = useState(() => {
		const storedProductList = JSON.parse(localStorage.getItem('productList'));
		return Array.isArray(storedProductList) ? storedProductList : [];
	});

	const onFinish = (values) => {

		const { productName, productPrice, productAmount } = values;

		const isDuplicate = productList.some(
			(product) => product.name.trim().toLowerCase() === productName.trim().toLowerCase()
		);

		if (isDuplicate) {
			message.error('Ya existe un producto con este nombre');
			return;
		}

		const newProduct = {
			name: productName,
			price: parseFloat(productPrice),
			amount: parseInt(productAmount, 10)
		};
		CreateProduct(newProduct)
		form.resetFields();
		message.success('Producto agregado exitosamente');
	};

	return (
		<Form
			form={form}
			onFinish={onFinish}
			labelCol={{ span: 6 }}
			wrapperCol={{ span: 16 }}
		>
			<Form.Item
				className={`formItem ${darkMode ? 'dark-mode' : ''}`}
				label="Nombre"
				name="productName"
				rules={[{ required: true, message: 'Por favor, ingrese el nombre del producto' }]}
			>
				<Input name='productName' />
			</Form.Item>

			<Form.Item
				className={`formItem ${darkMode ? 'dark-mode' : ''}`}
				label='Precio'
				name="productPrice"
				rules={[{ required: true, message: 'Por favor, ingrese el precio del producto' }]}
			>
				<InputNumber name='productPrice' style={{ width: '100%' }} controls={false} />
			</Form.Item>

			<Form.Item
				className={`formItem ${darkMode ? 'dark-mode' : ''}`}
				label="Cantidad"
				name="productAmount"
				rules={[{ required: true, message: 'Por favor, ingrese la cantidad del producto' }]}
			>
				<InputNumber name='productAmount' style={{ width: '100%' }} controls={false} />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 6, span: 16 }}>
				<Button type="primary" htmlType="submit" >
					Agregar Producto
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddProductForm;
