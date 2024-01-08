import React from 'react';
import { Button } from 'antd';
import { useCart } from '../../contexts/CartContext';
import './BasicButton.scss'; // Importa el archivo de estilos

const BasicButton = ({ onClick, label, style, disabled }) => {
	const { darkMode } = useCart()
	return (
		<Button
			type="primary"
			onClick={onClick}
			style={{ marginTop: '8px', ...style }}
			disabled={disabled}
			className={`basicButton ${darkMode ? 'dark-mode' : ''} ${disabled ? 'disabled' : ''}`}
		>
			{label}
		</Button>
	);
};

export default BasicButton;