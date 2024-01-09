import React from 'react';
import { Row, Typography, Col } from 'antd';
import { useCart } from '../../contexts/CartContext';
import './Home.scss';
import ProductList from '../ProductList/ProductList';

const Home = () => {
	const { darkMode } = useCart();

	return (
		<Row className={`home ${darkMode ? 'dark-mode' : ''}`}>
			<Col span={24} className={`titleContainer ${darkMode ? 'dark-mode' : ''}`}>
				<Typography.Title level={1} className={`title ${darkMode ? 'dark-mode' : ''}`}>
					Bienvenido a DamiStore
				</Typography.Title>
			</Col>
			<Col span={24}>
				<Typography.Paragraph className={`presentation ${darkMode ? 'dark-mode' : ''}`} style={{ margin: 0 }}>
					Bienvenido a DamiStore, tu destino de confianza para productos alimenticios con décadas de experiencia en la industria. Somos una empresa familiar comprometida con la excelencia, ofreciendo una amplia variedad de productos de alta calidad a precios accesibles. Nuestra pasión por la alimentación de calidad se refleja en cada artículo que ofrecemos, asegurándote una experiencia de compra única donde tradición y variedad se encuentran para satisfacer tus necesidades culinarias. Descubre la diferencia en DamiStore, donde la calidad y la tradición se fusionan para crear momentos deliciosos en cada rincón de tu hogar.
				</Typography.Paragraph>
			</Col>
			<Col className="box">
				<ProductList />
			</Col>
		</Row>

	);
};

export default Home;
