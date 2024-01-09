// src/components/Footer.js
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import './Footer.scss'

const Footer = () => {
	const { darkMode } = useCart();
	return (
		<div className={`footer ${darkMode ? 'dark-mode' : ''}`}>
			<p >© damiStore</p>
		</div>
	);
};

export default Footer;
