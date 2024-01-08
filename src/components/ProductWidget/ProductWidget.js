import React, { useState } from 'react';
import { Card, InputNumber, Button, Row, Typography, Col } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import ButtonBox from '../buttonBox/ButtonBox';
import BasicButton from '../basicButton/BasicButton'
import { useCart } from '../../contexts/CartContext';
import './ProductWidget.scss';

const ProductWidget = ({ product }) => {
	const { addToCart } = useCart();
	const [localQuantity, setLocalQuantity] = useState(0);

	const handleAddToCart = () => {
		addToCart({ ...product, quantity: localQuantity });
		setLocalQuantity(0);
	};

	return (
		<Row className='cardContainer'>
			<Card className='card'>
				<Typography.Title level={3} className='cardTitle'>
					{product.name}
				</Typography.Title>
				<Col>
					<Typography.Paragraph>
						Precio: ${product?.price?.toLocaleString()}
					</Typography.Paragraph>
				</Col>
				<Col className='cardButtons'>
					<ButtonBox quantity={localQuantity} setQuantity={setLocalQuantity} product={product} />
				</Col>
				<Col className='addToCardButton'>
					<BasicButton onClick={handleAddToCart} label="Add to Cart" />
				</Col>
			</Card>
		</Row>
	);
};

export default ProductWidget;
