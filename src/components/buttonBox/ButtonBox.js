import React, { useEffect, useState } from 'react';
import { Row, Button, InputNumber, Typography } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';

const ButtonBox = ({ quantity, setQuantity, product }) => {
	const { updateQuantity, productList } = useCart();
	const [isMaxQuantity, setIsMaxQuantity] = useState(false);

	const handleQuantityChange = (value) => {
		setQuantity(value);
		setIsMaxQuantity(false);
	};

	const handleDeleteFromCart = () => {
		updateQuantity(product.id, 0);
		setQuantity(0);
	};

	useEffect(() => {
		const storedProduct = productList.find((p) => p.id === product.id);
		const maxQuantity = storedProduct ? storedProduct.amount : 0;
		setIsMaxQuantity(quantity >= maxQuantity);
	}, [quantity, product, productList]);

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
			<Button
				onClick={() => handleQuantityChange(quantity + 1)}
				icon={<PlusOutlined />}
				disabled={isMaxQuantity}
			/>
			{isMaxQuantity && (
				<Typography.Text type="danger" style={{ marginLeft: '8px' }}>
					La cantidad seleccionada es la cantidad total de productos disponibles.
				</Typography.Text>
			)}
		</Row>
	);
};

export default ButtonBox;
