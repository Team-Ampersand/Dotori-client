import React, { useState } from 'react';
import { DotoriLogoV2 } from '../../Assets/Svg';
import * as S from './Style';
import { Link } from 'react-router-dom';
import { signup, auth, authCheck } from '../../Api/member';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type userRegister = {
	id: string;
	emailCode: string;
	stuId: string;
	name: string;
	password: string;
	repassword: string;
};

const TrySignup = () => {
	const [userRegister, setUserRegister] = useState<userRegister>(
		{} as userRegister
	);
	const [clicked, setClicked] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	const onSignup = async () => {
		if (!disabled) {
			return toast.warning('이메일 인증 이후 회원가입을 진행해주세요');
		}
		if (userRegister.id === '')
			return toast.warning('이메일이 입력되지 않았어요');
		else if (userRegister.emailCode === '')
			return toast.warning('이메일코드가 입력되지 않았어요');
		else if (userRegister.name === '')
			return toast.warning('이름이 입력되지 않았어요');
		else if (userRegister.stuId === '')
			return toast.warning('학번이 입력되지 않았어요');
		else if (!parseInt(userRegister.stuId))
			return toast.warning('학번이 숫자가 아니에요');
		else if (userRegister.password === '')
			return toast.warning('비밀번호가 입력되지 않았어요');
		else if (userRegister.repassword === '')
			return toast.warning('비밀번호가 재입력이 입력되지 않았어요');
		if (userRegister.password !== userRegister.repassword)
			return toast.warning('입력한 비밀번호가 서로 달라요');
		await signup(
			userRegister.id + '@gsm.hs.kr',
			userRegister.password,
			userRegister.name,
			userRegister.stuId
		);
		toast.success('회원가입이 되었어요');
		navigate('/signin');
	};

	const emailCertify = async () => {
		const isSuccess = await auth(userRegister.id + '@gsm.hs.kr');
		if(isSuccess) setClicked(false)
	};

	const AuthCheck = async (setDisabled) => {
		if (userRegister.emailCode === '') {
			return toast.warning('아무것도 입력하지 않으셨어요');
		}
		const isSuccess = await authCheck(userRegister.emailCode);
		if(isSuccess) {
			setDisabled(true);
			toast.info('인증이 완료 되었어요');
		}
	};

	return {
		userRegister,
		setUserRegister,
		onSignup,
		emailCertify,
		AuthCheck,
		clicked,
		disabled,
		setDisabled,
	};
};

const SignupForm: React.FC = () => {
	const {
		userRegister,
		setUserRegister,
		onSignup,
		emailCertify,
		AuthCheck,
		clicked,
		disabled,
		setDisabled,
	} = TrySignup();
	return (
		<S.Positioner>
			<S.LogoWrapper>
				<DotoriLogoV2 />
			</S.LogoWrapper>
			<S.EmailContainer>
				<S.InputWrapper>
					<S.InputStyle
						placeholder="이메일을 입력하세요"
						type="text"
						displayed={false}
						onChange={(e) =>
							setUserRegister({ ...userRegister, id: e.target.value })
						}
						disabled={disabled}
						maxLength={6}
						required
					/>
					<label>@gsm.hs.kr</label>
				</S.InputWrapper>
				<button
					onClick={() => {
						if (userRegister.id === '') {
							toast.warning('이메일을 입력하지 않았어요');
						} else {
							emailCertify();
						}
					}}
					disabled={disabled}
				>
					인증
				</button>
			</S.EmailContainer>
			<S.EmailContainer>
				<S.InputStyle
					placeholder="이메일코드를 입력하세요"
					type="text"
					displayed={clicked}
					onChange={(e) =>
						setUserRegister({ ...userRegister, emailCode: e.target.value })
					}
					disabled={disabled}
				/>
				<S.CertifyButton
					displayed={clicked}
					onClick={() => {
						AuthCheck(setDisabled);
					}}
					disabled={disabled}
				>
					확인
				</S.CertifyButton>
			</S.EmailContainer>
			<S.InputStyle
				placeholder="이름을 입력하세요"
				type="text"
				displayed={false}
				onChange={(e) =>
					setUserRegister({ ...userRegister, name: e.target.value })
				}
			/>
			<S.InputStyle
				placeholder="학번을 입력하세요"
				type="text"
				displayed={false}
				onChange={(e) =>
					setUserRegister({ ...userRegister, stuId: e.target.value })
				}
				maxLength={4}
				autoComplete="off"
			/>
			<S.InputStyle
				placeholder="비밀번호를 입력하세요"
				type="password"
				displayed={false}
				onChange={(e) =>
					setUserRegister({ ...userRegister, password: e.target.value })
				}
				autoComplete="off"
			/>
			<S.InputStyle
				placeholder="비밀번호를 재입력하세요"
				type="password"
				displayed={false}
				onChange={(e) =>
					setUserRegister({ ...userRegister, repassword: e.target.value })
				}
				onKeyPress={(e) => {
					if (e.key === 'Enter') onSignup();
				}}
			/>
			<S.ButtonStyle
				onClick={() => {
					onSignup();
				}}
				disabled={!disabled}
				displayed={disabled}
			>
				회원가입
			</S.ButtonStyle>
			<S.SigninContainer>
				<span>이미 계정이 있으신가요?</span>
				<Link to="/signin">로그인</Link>
			</S.SigninContainer>
		</S.Positioner>
	);
};

export default SignupForm;
