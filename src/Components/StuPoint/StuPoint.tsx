import React, { useState } from "react";
import * as S from "./Style";

interface StuPointProps {
	stuNum: number;
	name: string;
	point: number;
}

const StuPoint: React.FC<StuPointProps> = ({ stuNum, name, point }) => {
	const [stuPoint, setStuPoint] = useState("");
	const getPoint = (e) => {
		setStuPoint(e.target.value);
	};

	const givePoint = () => {
		console.log(stuPoint);
		setStuPoint("");
	};

	return (
		<>
			<S.StuPointContainer>
				<S.StuNumStyle>{stuNum}</S.StuNumStyle>
				<S.NameStyle>{name}</S.NameStyle>
				<S.PointStyle>{point}</S.PointStyle>
				<S.PointInput placeholder="상벌점을 입력하세요.." onChange={getPoint} />
				<S.PointBtn onClick={givePoint}>상벌점 부여</S.PointBtn>
			</S.StuPointContainer>
		</>
	);
};

export default StuPoint;
