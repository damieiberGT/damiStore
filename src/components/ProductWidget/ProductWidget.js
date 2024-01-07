import React, { useState } from 'react';
import { Card, InputNumber, Button, Row, Typography, Col } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';
import './ProductWidget.scss'

const ProductWidget = ({ product }) => {
	const { addToCart, updateQuantity } = useCart();
	const [quantity, setQuantity] = useState(0);

	const handleQuantityChange = (value) => {
		setQuantity(value);
	};

	const handleAddToCart = () => {
		addToCart({ ...product, quantity });
		setQuantity(0);
	};

	const handleDeleteFromCart = () => {
		updateQuantity(product.id, 0);
		setQuantity(0);
	};

	return (
		<Row className='cardContainer'>
			<Card className='card'>
				<Typography.Title level={3} className='cardTitle'>
					{product.name}
				</Typography.Title>
				<Col>
					<Typography.Paragraph>
						Precio: ${product.price.toLocaleString()}
					</Typography.Paragraph>
				</Col>
				<Col>
					{quantity === 0 ?
						<Button onClick={() => handleDeleteFromCart()} icon={<DeleteOutlined />} disabled />
						: quantity === 1 ?
							(<Button onClick={() => handleDeleteFromCart()} icon={<DeleteOutlined />} />)
							: (<Button onClick={() => handleQuantityChange(quantity - 1)} icon={<MinusOutlined />} />)}
					<InputNumber
						min={0}
						value={quantity}
						onChange={handleQuantityChange}
						controls={false}
						style={{ margin: '0 8px' }}
					/>
					<Button onClick={() => handleQuantityChange(quantity + 1)} icon={<PlusOutlined />} />
				</Col>
				<Col className='addToCardButton'>
					<Button type="primary" onClick={handleAddToCart} style={{ marginTop: '8px' }}>
						Add to Cart
					</Button>
				</Col>
			</Card>
		</Row>

	);
};

export default ProductWidget;
