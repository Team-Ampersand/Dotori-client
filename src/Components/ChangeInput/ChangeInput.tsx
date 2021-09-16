import React, { useState } from 'react';
import * as S from './Style';

interface TextInputProps {
	init: string;
	edit: boolean;
}

const ChangeInput: React.FC<TextInputProps> = ({ init, edit }) => {
	const [text, setText] = useState(init);
	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			{edit ? (
				<S.Input type="text" value={text} onChange={(e) => handleChange(e)} />
			) : (
				<>{text}</>
			)}
		</>
	);
};

export default ChangeInput;
