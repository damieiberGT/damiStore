import React, { useContext } from 'react';
import AddProductForm from '../../components/addProductForm/AddProductForm';
import { useCart } from '../../contexts/CartContext';
import './AddpProduct.scss'

const AddProductPage = ({ onAddProduct }) => {
	const { darkMode } = useCart();

	const handleAddProduct = (newProduct) => {
		onAddProduct(newProduct);
	};

	return (
		<div className={`restButton ${darkMode ? 'dark-mode' : ''}`}>
			<h2>Agregar Nuevo Producto</h2>
			<AddProductForm onAddProduct={handleAddProduct} />
		</div>
	);
};

export default AddProductPage;
