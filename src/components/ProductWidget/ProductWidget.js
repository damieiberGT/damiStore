import React, { useState } from 'react';
import { Card, Row, Typography, Col } from 'antd';
import ButtonBox from '../buttonBox/ButtonBox';
import BasicButton from '../basicButton/BasicButton';
import { useCart } from '../../contexts/CartContext';
import './ProductWidget.scss';

const ProductWidget = ({ product }) => {
	const { addToCart, productList } = useCart();
	const [localQuantity, setLocalQuantity] = useState(0);

	const storedProduct = productList.find((p) => p.id === product.id);
	const isInvalidQuantity =
		!storedProduct || localQuantity <= 0 || Math.floor(localQuantity) > storedProduct.amount;

	const handleAddToCart = () => {
		if (!isInvalidQuantity) {
			addToCart({ ...product, quantity: Math.floor(localQuantity) });
			setLocalQuantity(0);
		} else {
			console.log('La cantidad seleccionada es inválida');
		}
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
					<BasicButton onClick={handleAddToCart} label="Add to Cart" disabled={isInvalidQuantity} />
				</Col>
			</Card>
		</Row>
	);
};

export default ProductWidget;


