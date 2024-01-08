import React from 'react';
import { Layout, Menu, Switch, Space, Row, Col } from 'antd';
import ButtonBox from '../buttonBox/ButtonBox';
import './ProductInCart.scss'

const ProductInCart = ({ item, handleQuantityChange }) => {
	return (
		<Row key={item.id} className="cartItem">
			<Col span={8} className="cartItemName">
				<p>{item.name}</p>
			</Col>
			<Col span={16}>
				<ButtonBox quantity={item.quantity} setQuantity={(newQuantity) => handleQuantityChange(item.id, newQuantity)} product={item} />
			</Col>
		</Row>
	);
};

export default ProductInCart;