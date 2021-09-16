import React from 'react';
import { DotoriLogo } from '../../Assets/Svg';
import * as S from './Style';
import { Input, Button } from '../';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignupData = [
	{
		id: false,
		name: '학번을 입력하세요',
		type: 'text',
	},
	{
		id: false,
		name: '이름을 입력하세요.',
		type: 'text',
	},
	{
		id: false,
		name: '비밀번호를 입력하세요.',
		type: 'password',
	},
	{
		id: false,
		name: '비밀번호를 재입력하세요.',
		type: 'password',
	},
];

const SignupForm: React.FC = () => {
	const [clicked, setClicked] = useState(true);
	return (
		<S.Positioner>
			<DotoriLogo />
			<S.EmailContainer>
				<Input
					item={{ id: false, name: '이메일을 입력하세요.', type: 'text' }}
				/>
				<button onClick={() => setClicked(false)}>인증하기</button>
			</S.EmailContainer>
			<Input
				item={{ id: clicked, name: '이메일코드를 입력하세요.', type: 'text' }}
			/>
			{SignupData.map((item, ix) => (
				<Input item={item} />
			))}
			<S.SelectContainer>
				<span>당신은?</span>
				<select>
					<option>학생</option>
					<option>기숙사 자치위원회</option>
					<option>사감 선생님</option>
				</select>
			</S.SelectContainer>
			<S.QuestionContainer>
				<span>당신의 어렸을 때 별명은?</span>
				<Input item={{ name: '질문에 대한 답을 입력해주세요', type: 'text' }} />
			</S.QuestionContainer>
			<Button />
			<S.SigninContainer>
				<span>이미 계정이 있으신가요?</span>
				<Link to="/signin">로그인</Link>
			</S.SigninContainer>
		</S.Positioner>
	);
};

export default SignupForm;
