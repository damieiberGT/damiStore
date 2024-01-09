// src/components/ShoppingCart/ShoppingCart.js
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Layout, Menu, Switch, Typography, Row, Col } from 'antd';
import ProductInCart from '../../components/productInCart/ProductInCart';
import ButtonBox from '../../components/buttonBox/ButtonBox';
import BasicButton from '../../components/basicButton/BasicButton';
import './ShoppingCart.scss';

const ShoppingCart = () => {
	const { cartItems, updateQuantity, calculateTotal, handleCheckout, clearCart, darkMode } = useCart();

	const handleQuantityChange = (productId, newQuantity) => {
		updateQuantity(productId, newQuantity);
	};

	const handleClearCart = () => {
		clearCart();
	};

	return (
		<>
			<Row className={`${darkMode ? 'dark-mode' : ''}`}>
				<Col span={24} className={`shoppingCartTitleContainer ${darkMode ? 'dark-mode' : ''}`}>
					<Typography.Title level={2} className={`shoppingCartTitle ${darkMode ? 'dark-mode' : ''}`}>
						Carrito de Compras
					</Typography.Title>
				</Col>
			</Row>
			<Row className={`shoppingCartContainer ${darkMode ? 'dark-mode' : ''}`}>
				<Col span={16} className='cartItemContainer'>
					{cartItems.map((item) => (
						<Col span={24} key={item.id} className='cartItemColumn' >
							<ProductInCart item={item} handleQuantityChange={handleQuantityChange} />
						</Col>
					))}
				</Col>
				<Col span={8} className='subtotal'>
					<Col span={24}>
						<p className='total'>
							Total: ${calculateTotal()}
						</p>
					</Col>
					<Col span={24} className='buttonRow'>
						<BasicButton onClick={handleClearCart} label="Limpiar Carrito" />
						<BasicButton onClick={handleCheckout} label="Comprar" />
					</Col>
				</Col>
			</Row>
		</>
	);
};

export default ShoppingCart;
