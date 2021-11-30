import React, { useState } from 'react';
import * as S from './Style';

interface StuPointProps {
	stuNum: number;
	name: string;
	point: number;
}

const StuPoint: React.FC<StuPointProps> = ({ stuNum, name, point }) => {
	const [givePoint, setGivePoint] = useState('');
	const getPoint = (e) => {
		setGivePoint(e.target.value);
	};

	const [stuPoint, setStuPoint] = useState(point);

	const grantPoint = () => {
		let tmp = stuPoint;
		setStuPoint((tmp += Number(givePoint)));
		setGivePoint('');
	};

	return (
		<>
			<S.StuPointContainer>
				<S.StuNumStyle>{stuNum}</S.StuNumStyle>
				<S.NameStyle>{name}</S.NameStyle>
				<S.PointStyle>{stuPoint}</S.PointStyle>
				<S.PointInput
					placeholder="상벌점을 입력하세요.."
					type="number"
					onChange={getPoint}
					value={givePoint}
				/>
				<S.PointBtn onClick={grantPoint}>상벌점 부여</S.PointBtn>
			</S.StuPointContainer>
		</>
	);
};

export default StuPoint;
