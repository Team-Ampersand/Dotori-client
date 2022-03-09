import React, { useState } from 'react';
import * as S from './Style';

interface TextSelectProps {
	init: string;
	edit: boolean;
}

const ChangeSelect: React.FC<TextSelectProps> = ({ init, edit }) => {
	const [text, setText] = useState(init);
	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			{edit ? (
				<S.Select onChange={handleChange} defaultValue={text}>
					<option value="학생">학생</option>
					<option value="자치위원">자치위원</option>
				</S.Select>
			) : (
				<>{init}</>
			)}
		</>
	);
};

export default ChangeSelect;
