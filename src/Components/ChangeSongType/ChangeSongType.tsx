import React from 'react';
import * as S from './Style';

interface ChangeSongTypeProps {
	active: boolean;
	setActive: (value: boolean) => void;
}

const ChangeLaptopType: React.FC<ChangeSongTypeProps> = ({
	active,
	setActive,
}) => {
	return (
		<S.Postioner onClick={() => setActive(!active)} isActive={active}>
			<span>{active ? '유저' : '관리자'}</span>
		</S.Postioner>
	);
};

export default ChangeLaptopType;
