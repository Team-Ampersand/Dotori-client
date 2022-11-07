import React, { useState } from 'react';
import { DotoriLogoV2 } from 'Assets/Svg';
import * as S from './Style';
import { Link, useNavigate } from 'react-router-dom';
import { HasToken } from '../../Atoms';
import { useSetRecoilState } from 'recoil';
import { signin } from '../../Api/member';
import { toast } from 'react-toastify';

type user = {
	id: string;
	password: string;
};

const TrySignin = () => {
	const [user, setUser] = useState<user>({} as user);
	const setLogged = useSetRecoilState(HasToken);
	const navigate = useNavigate();

	const onSignin = async () => {
		if (user.id === '') {
			return toast.warning('이메일을 입력해주세요');
		} else if (user.password === '') {
			return toast.warning('비밀번호를 입력해주세요');
		}
		const { data }: any = await signin(user.id + '@gsm.hs.kr', user.password);

		localStorage.setItem('Dotori_accessToken', data.data.token.accessToken);
		localStorage.setItem('Dotori_refreshToken', data.data.token.refreshToken);

		setLogged(true);
		if (data.data.gender === 'PENDING') {
			navigate('/gender');
		} else {
			navigate('/home');
		}
	};
	return { setUser, user, onSignin };
};

const SigninForm: React.FC = () => {
	const { setUser, user, onSignin } = TrySignin();

	return (
		<>
			<S.Positioner>
				<S.LogoWrapper>
					<DotoriLogoV2 />
				</S.LogoWrapper>
				<S.InputWrapper>
					<label>@gsm.hs.kr</label>
					<S.InputStyle
						placeholder="아이디"
						type="text"
						displayed={false}
						onChange={({ target: { value } }) =>
							setUser({ ...user, id: value })
						}
						onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
							if (e.key === 'Enter') onSignin();
						}}
						maxLength={6}
					/>
				</S.InputWrapper>
				<S.InputStyle
					placeholder="비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) =>
						setUser({ ...user, password: value })
					}
					onKeyPress={(e) => {
						if (e.key === 'Enter') onSignin();
					}}
				/>
				<S.ButtonStyle
					onClick={() => {
						onSignin();
					}}
				>
					로그인
				</S.ButtonStyle>
				<S.Line />
				<S.SigninContainer>
					<S.SignupWrapper>
						<span>아직 계정이 없으신가요?</span>
						<Link to="/signup">회원가입</Link>
					</S.SignupWrapper>
					<S.FindWrapper>
						<span>비밀번호를 잊으셨나요?</span>
						<Link to="/password">비밀번호 찾기</Link>
					</S.FindWrapper>
				</S.SigninContainer>
			</S.Positioner>
		</>
	);
};

export default SigninForm;
