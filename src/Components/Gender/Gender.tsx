import React from 'react';
import * as S from './Style';
import { SmallMale, SmallFemale } from 'Assets/Svg';
import { useDecode } from 'Hooks/useDecode';
import { changeGender } from 'Api/member';
import { useNavigate } from 'react-router-dom';

const Gender = () => {
	const { sub } = useDecode();
	const navigate = useNavigate();

	const onSubmit = (gender: string) => {
		changeGender(gender, sub);
		navigate('/home');
	};

	return (
		<S.Positioner>
			<h2>성별을 선택해주세요</h2>
			<S.GenderWrapper>
				<S.Gender onClick={() => onSubmit('MAN')}>
					<SmallMale />
					<span>남자</span>
				</S.Gender>
				<S.Gender onClick={() => onSubmit('WOMAN')}>
					<SmallFemale />
					<span>여자</span>
				</S.Gender>
			</S.GenderWrapper>
		</S.Positioner>
	);
};

export default Gender;
