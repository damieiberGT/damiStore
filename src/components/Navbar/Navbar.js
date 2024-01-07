// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Switch as AntSwitch } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Navbar.scss';
import { useCart } from '../../contexts/CartContext';

const { Header } = Layout;

const Navbar = ({ cartItemCount }) => {
	const { darkMode, setDarkMode } = useCart();

	const handleDarkModeChange = (checked) => {
		setDarkMode(checked);
	};

	return (
		<Header className={darkMode ? 'dark-mode' : 'light-mode'}>
			<div className="navbar-container">
				<div className="logo">
					<Link to="/">DamiStore</Link>
				</div>
				<div className="menu">
					<Menu theme={darkMode ? 'dark' : 'light'} mode="horizontal" defaultSelectedKeys={['1']}>
						<Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
						<Menu.Item key="2"><Link to="/productos">Productos</Link></Menu.Item>
					</Menu>
				</div>
				<div className="switch-cart-container">
					<AntSwitch
						checked={darkMode}
						onChange={handleDarkModeChange}
					/>
					<div className="cart-icon">
						<Link to="/carrito">
							<ShoppingCartOutlined style={{ fontSize: '24px', marginLeft: '8px' }} />
							{cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
						</Link>
					</div>
				</div>
			</div>
		</Header>
	);
};

export default Navbar;
