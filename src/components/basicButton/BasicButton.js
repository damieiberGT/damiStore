import React from 'react';
import { Button } from 'antd';

const BasicButton = ({ onClick, label, style }) => {
	return (
		<Button type="primary" onClick={onClick} style={{ marginTop: '8px', ...style }}>
			{label}
		</Button>
	);
};

export default BasicButton;
