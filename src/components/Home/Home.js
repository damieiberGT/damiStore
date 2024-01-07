// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h2>Bienvenido a la Tienda</h2>
			<div>
				<Link to="/productos">
					<div className="box">
						<p>Ir a la Lista de Productos</p>
					</div>
				</Link>
				<Link to="/carrito">
					<div className="box">
						<p>Ir al Carrito</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
