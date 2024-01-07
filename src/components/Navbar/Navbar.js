// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';

const { Header } = Layout;

const Navbar = () => {
	const { cartItems } = useCart();

	return (
		<Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			{/* Parte izquierda con el título */}
			<div style={{ flex: 1 }}>
				<Link to="/">DamiStore</Link>
			</div>

			{/* Parte derecha con los botones del menú */}
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ marginRight: 'auto' }}>
					<Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
					<Menu.Item key="2"><Link to="/productos">Productos</Link></Menu.Item>
				</Menu>

				{/* Icono del carrito con indicador */}
				<div style={{ marginLeft: '20px' }}>
					<Link to="/carrito">
						<ShoppingCartOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
						{cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
					</Link>
				</div>
			</div>
		</Header>
	);
};

export default Navbar;
