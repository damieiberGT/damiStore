// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Switch, Space, Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Navbar.scss';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
	const { darkMode, setDarkMode, cartItems } = useCart();

	const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

	const handleDarkModeChange = (checked) => {
		setDarkMode(checked);
	};

	return (
		<Row className={`navbar-container ${darkMode ? 'dark-mode' : ''}`}>
			<Col span={8} className="logo">
				<Link to="/">DamiStore</Link>
			</Col>
			<Col span={16} className='menu'>
				<Menu theme={darkMode ? 'dark-mode' : ''} mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
					<Menu.Item key="3"><Link to="/add">Agregar Productos</Link></Menu.Item>
				</Menu>
				<div className="switch-cart-container">
					<div className="cart-icon">
						<Link to="/carrito">
							<ShoppingCartOutlined style={{ fontSize: '24px', marginLeft: '8px' }} />
							{totalQuantity > 0 ? <span className="cart-badge">{totalQuantity}</span> : <span className="cart-empty"></span>}
						</Link>
					</div>
				</div>
				<Space direction="vertical">
					<Switch
						checked={darkMode}
						onChange={handleDarkModeChange}
						checkedChildren='Night'
						unCheckedChildren='Day'
					/>
				</Space>
			</Col >
		</Row>
	);
};

export default Navbar;
