import React, { useState } from 'react';
import * as S from './Style';

interface TextInputProps {
	init: string;
	edit: boolean;
	type: string;
}

const ChangeInput: React.FC<TextInputProps> = ({ init, edit, type }) => {
	const [text, setText] = useState(init);
	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			{edit ? (
				<S.Input type={type} value={text} onChange={(e) => handleChange(e)} />
			) : (
				<>{text}</>
			)}
		</>
	);
};

export default ChangeInput;