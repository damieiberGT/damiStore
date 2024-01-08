import React, { useEffect } from 'react';
import { Col, Button, InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';

const ButtonBox = ({ quantity, setQuantity, product }) => {
	const { updateQuantity } = useCart();

	const handleQuantityChange = (value) => {
		setQuantity(value);
	};

	const handleDeleteFromCart = () => {
		updateQuantity(product.id, 0);
		setQuantity(0);
	};

	return (
		<Col>
			{quantity === 0 ? (
				<Button onClick={handleDeleteFromCart} icon={<DeleteOutlined />} disabled />
			) : quantity === 1 ? (
				<Button onClick={handleDeleteFromCart} icon={<DeleteOutlined />} />
			) : (
				<Button onClick={() => handleQuantityChange(quantity - 1)} icon={<MinusOutlined />} />
			)}
			<InputNumber
				min={0}
				value={quantity}
				onChange={handleQuantityChange}
				controls={false}
				style={{ margin: '0 8px' }}
			/>
			<Button onClick={() => handleQuantityChange(quantity + 1)} icon={<PlusOutlined />} />
		</Col>
	);
};

export default ButtonBox;