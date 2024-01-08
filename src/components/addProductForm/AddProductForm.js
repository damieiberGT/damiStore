// src/components/AddProductForm/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productAmount, setProductAmount] = useState('');
	const [productList, setProductList] = useState(() => {
		const storedProductList = JSON.parse(localStorage.getItem('productList'));
		return Array.isArray(storedProductList) ? storedProductList : [];
	});

	const handleAddProduct = () => {
		const isDuplicate = productList.some(product => product.name.trim().toLowerCase() === productName.trim().toLowerCase());

		if (isDuplicate) {
			alert("Ya existe un producto con este nombre");
			return;
		}
		const newProduct = {
			name: productName,
			price: parseFloat(productPrice),
			amount: parseInt(productAmount, 10),
			id: Math.floor(Math.random() * 1000),
		};
		const updatedProductList = [...productList, newProduct];
		setProductList(updatedProductList);
		localStorage.setItem('productList', JSON.stringify(updatedProductList));
		setProductName('');
		setProductPrice('');
		setProductAmount('');
	};

	return (
		<div>
			<label>Nombre del producto:</label>
			<input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />

			<label>Precio del producto:</label>
			<input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />

			<label>Cantidad del producto:</label>
			<input type="number" value={productAmount} onChange={(e) => setProductAmount(e.target.value)} />

			<button onClick={handleAddProduct}>Agregar Producto</button>
		</div>
	);
};

export default AddProductForm;
