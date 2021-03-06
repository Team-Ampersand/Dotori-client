import React, { useState } from 'react';
import * as S from './Style';
import { DotoriLogo } from 'Assets/Svg';
import { withdrawal } from 'Api/member';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const onWithdrawl = async (id: string, password: string, navigate) => {
	await withdrawal(id, password);
	toast.success('회원탈퇴가 되었어요');

	localStorage.removeItem('Dotori_accessToken');
	localStorage.removeItem('Dotori_refreshToken');

	navigate('/signin');
	window.location.reload();
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
						toast.info('잘 생각하셨어요!');
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
