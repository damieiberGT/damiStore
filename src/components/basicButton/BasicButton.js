import React from 'react';
import { Button } from 'antd';

const BasicButton = ({ onClick, label, style, disabled }) => {
	return (
		<Button type="primary" onClick={onClick} style={{ marginTop: '8px', ...style }} disabled={disabled}>
			{label}
		</Button>
	);
};

export default BasicButton;
