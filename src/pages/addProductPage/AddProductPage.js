// AddProductPage.js
import React from 'react';
import AddProductForm from '../../components/addProductForm/AddProductForm';

const AddProductPage = ({ onAddProduct }) => {
	const handleAddProduct = (newProduct) => {
		// Lógica para agregar el nuevo producto a la lista (por ejemplo, utilizando un estado o llamando a una función en el padre)
		onAddProduct(newProduct);

		// Redirigir a la página de lista de productos o realizar otras acciones según tus necesidades
		// history.push('/product-list');
	};

	return (
		<div>
			<h2>Agregar Nuevo Producto</h2>
			<AddProductForm onAddProduct={handleAddProduct} />
		</div>
	);
};

export default AddProductPage;
