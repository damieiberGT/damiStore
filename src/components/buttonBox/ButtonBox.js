import React, { useEffect } from 'react';
import { Row, Button, InputNumber } from 'antd';
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

	const renderButton = () => {
		switch (quantity) {
			case 0:
				return <Button onClick={handleDeleteFromCart} icon={<DeleteOutlined />} disabled />;
			case 1:
				return <Button onClick={handleDeleteFromCart} icon={<DeleteOutlined />} />;
			default:
				return <Button onClick={() => handleQuantityChange(quantity - 1)} icon={<MinusOutlined />} />;
		}
	};

	return (
		<Row className='buttonBoxRow'>
			{renderButton()}
			<InputNumber
				min={0}
				value={quantity}
				onChange={handleQuantityChange}
				controls={false}
				style={{ margin: '0 8px', maxWidth: '25%' }}
			/>
			<Button onClick={() => handleQuantityChange(quantity + 1)} icon={<PlusOutlined />} />
		</Row>
	);
};

export default ButtonBox;