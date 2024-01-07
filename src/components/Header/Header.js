// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>Mi Tienda</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/productos">Productos</Link>
				<Link to="/carrito">Carrito</Link>
			</nav>
		</header>
	);
};

export default Header;
