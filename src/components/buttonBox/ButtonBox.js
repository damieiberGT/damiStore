import React, { useEffect, useState } from 'react';
import { Row, Button, InputNumber, Typography, Col, Popover } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';
import './ButtonBox.scss';

const ButtonBox = ({ quantity, setQuantity, product }) => {
	const { productList } = useCart();
	const [isMaxQuantity, setIsMaxQuantity] = useState(false);

	const handleQuantityChange = (value) => {
		setQuantity(value);
		setIsMaxQuantity(false);
	};

	const handleDeleteFromCart = () => {
		setQuantity(0);
	};

	useEffect(() => {
		const storedProduct = productList.find((p) => p.id === product.id);
		const maxQuantity = storedProduct ? storedProduct.amount : 0;
		setIsMaxQuantity(quantity >= maxQuantity);
	}, [quantity, product, productList]);

	const content = (
		<Typography.Text type="danger">
			No hay más productos disponibles
		</Typography.Text>
	);

	const renderButton = () => {
		switch (quantity) {
			case 0:
				return (
					<Button
						onClick={handleDeleteFromCart}
						icon={<DeleteOutlined />}
						disabled
					/>
				);
			case 1:
				return (
					<Button
						onClick={handleDeleteFromCart}
						icon={<DeleteOutlined />}
					/>
				);
			default:
				return (
					<Button
						onClick={() => handleQuantityChange(quantity - 1)}
						icon={<MinusOutlined />}
					/>
				);
		}
	};

	return (
		<Row className="buttonBoxRow">
			<Col span={24} className="buttonBoxCol">
				{renderButton()}
				<InputNumber
					min={0}
					value={quantity}
					onChange={handleQuantityChange}
					controls={false}
					style={{ margin: '0 8px', maxWidth: '25%' }}
				/>
				<Popover
					content={isMaxQuantity ? content : null}
					trigger="hover"
				>
					<Button
						onClick={() => handleQuantityChange(quantity + 1)}
						icon={<PlusOutlined />}
						disabled={isMaxQuantity}
						style={{ backgroundColor: isMaxQuantity ? '#ff4d4f' : '' }}
					/>
				</Popover>
			</Col>
		</Row>
	);
};

export default ButtonBox;