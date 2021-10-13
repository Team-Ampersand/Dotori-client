import React, { useState } from 'react';
import { DotoriLogo } from 'Assets/Svg';
import * as S from './Style';
import { Link } from 'react-router-dom';
import { HasToken } from '../../Atoms/';
import { useSetRecoilState } from 'recoil';
import member from '../../Api/member';
import { setCookie } from '../../Utils/Cookie';

const TryLogin = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const setLogged = useSetRecoilState(HasToken);

	const onLogin = async () => {
		try {
			const res = await member.signin(id, password);
			const { accessToken } = res.data.data.accessToken;
			const { refreshToken } = res.data.data.refreshToken;

			setCookie('Dotori_accessToken', accessToken, {
				path: '/',
				secure: true,
			});

			setCookie('Dotori_refreshToken', refreshToken, {
				path: '/',
				secure: true,
			});

			setLogged(true);
		} catch (e) {
			alert(
				e.message === 'Error: Request failed with status code 404'
					? '올바르지 않은 아이디 또는 비밀번호입니다.'
					: '로그인 에러가 발생하였습니다.' + e
			);
		}
	};
	return [setId, setPassword, onLogin];
};

const LoginForm: React.FC = () => {
	const [setId, setPassword, onLogin] = TryLogin();
	return (
		<>
			<S.Positioner>
				<S.LogoWrapper>
					<DotoriLogo />
				</S.LogoWrapper>
				<S.InputStyle
					placeholder="아이디"
					type="text"
					displayed={false}
					onChange={({ target: { value } }) => setId(value)}
				/>
				<S.InputStyle
					placeholder="비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) => setPassword(value)}
				/>
				<S.ButtonStyle
					onClick={() => {
						onLogin('');
					}}
				>
					로그인
					<S.ArrowWrapper />
				</S.ButtonStyle>
				<S.Line />
				<S.SaveContainer>
					<S.CheckBox type="checkbox" />
					<span>아이디 저장</span>
				</S.SaveContainer>
				<S.SignupContainer>
					<span>아직 계정이 없으신가요?</span>
					<Link to="/signup">회원가입</Link>
				</S.SignupContainer>
				<S.FindContainer>
					<span>비밀번호를 잊으셨나요?</span>
					<Link to="/password">비밀번호 찾기</Link>
				</S.FindContainer>
			</S.Positioner>
		</>
	);
};

export default LoginForm;
