// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Switch, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Navbar.scss';
import { useCart } from '../../contexts/CartContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const { Header } = Layout;

const Navbar = () => {
	const { darkMode, setDarkMode, cartTotal } = useCart();

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
					<div className="cart-icon">
						<Link to="/carrito">
							<ShoppingCartOutlined style={{ fontSize: '24px', marginLeft: '8px' }} />
							{cartTotal > 0 && <span className="cart-badge">{cartTotal}</span>}
						</Link>
					</div>
				</div>
				<Space direction="vertical">
					<Switch
						checked={darkMode}
						onChange={handleDarkModeChange}
						checkedChildren={<DarkModeIcon sx={{ margin: "5px 0", padding: 0, fontSize: 12 }} />}
						unCheckedChildren={<LightModeIcon sx={{ marginTop: "-26px", padding: 0, fontSize: 12 }} />}
					/>
				</Space>
			</div>
		</Header>
	);
};

export default Navbar;
