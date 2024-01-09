import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Layout, Menu, Typography, Card, Row, Col } from 'antd';
import ButtonBox from '../buttonBox/ButtonBox';
import './ProductInCart.scss'
import ProductWidget from '../ProductWidget/ProductWidget';

const ProductInCart = ({ item, handleQuantityChange }) => {
	const { darkMode, localQuantity, setLocalQuantity } = useCart();
	return (
		<Row key={item.id} className={`cartItem ${darkMode ? 'dark-mode' : ''}`}>
			<Col span={8} >
				<p className={`cartItemName ${darkMode ? 'dark-mode' : ''}`}>{item.name}</p>
			</Col>
			<Col span={16}>
				<ButtonBox quantity={item.quantity} setQuantity={(newQuantity) => handleQuantityChange(item.id, newQuantity)} product={item} />
			</Col>
			{/* <Card className={`cardInCart ${darkMode ? 'dark-mode' : ''}`}>
				<Row className={`cardRow ${darkMode ? 'dark-mode' : ''}`}>
					<Col className='cardInCartButtons'>
						<Typography.Title level={3} className='cardTitle'>
							{item.name}
						</Typography.Title>
					</Col>
					<Col className='cardInCartButtons'>
						<ButtonBox quantity={item.quantity} setQuantity={setLocalQuantity} product={item} />
					</Col>
				</Row>
			</Card> */}
		</Row>
	);
};

export default ProductInCart;