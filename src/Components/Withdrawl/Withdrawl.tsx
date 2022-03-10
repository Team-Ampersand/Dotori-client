import React, { useState } from 'react';
import * as S from './Style';
import { DotoriLogo } from 'Assets/Svg';
import member from 'Api/member';
import { useNavigate } from 'react-router-dom';

const onWithdrawl = async (id: string, password: string, navigate) => {
	try {
		await member.delete(id, password);
		alert('회원탈퇴가 되었어요');

		localStorage.removeItem('Dotori_accessToken');
		localStorage.removeItem('Dotori_refreshToken');
		localStorage.removeItem('role');

		navigate('/signin');
		window.location.reload();
	} catch (e) {
		alert(e);
	}
};

const Withdrawl: React.FC = () => {
	const navigate = useNavigate();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	return (
		<S.Positioner>
			<S.LogoWrapper>
				<DotoriLogo />
			</S.LogoWrapper>
			<S.InputStyle
				type="text"
				placeholder="이메일을 입력하세요"
				onChange={({ target: { value } }) => setId(value)}
			/>
			<S.InputStyle
				type="password"
				placeholder="비밀번호를 입력하세요"
				onChange={({ target: { value } }) => setPassword(value)}
			/>
			<S.ButtonStyle
				onClick={() => {
					if (
						window.confirm(
							'정말로 회원탈퇴 하시겠어요?\n회원탈퇴로 인한 불이익은 Dotori 개발팀에서 책임지지 않아요'
						)
					) {
						onWithdrawl(id, password, navigate);
					} else {
						alert('잘 생각하셨습니다!');
						navigate('/');
					}
				}}
			>
				회원탈퇴
			</S.ButtonStyle>
		</S.Positioner>
	);
};

export default Withdrawl;
