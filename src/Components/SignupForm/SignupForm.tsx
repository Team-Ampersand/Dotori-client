import React, { useState } from 'react';
import { DotoriLogoV2 } from '../../Assets/Svg';
import * as S from './Style';
import { Link } from 'react-router-dom';
import { signup, auth, authCheck } from '../../Api/member';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TrySignup = () => {
	const [id, setId] = useState('');
	const [emailCode, setEmailCode] = useState('');
	const [stuId, setStuId] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setRePassword] = useState('');
	const [clicked, setClicked] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	const onSignup = async () => {
		if (!disabled) {
			return toast.warning('이메일 인증 이후 회원가입을 진행해주세요');
		}
		if (id === '') return toast.warning('이메일이 입력되지 않았어요');
		else if (emailCode === '')
			return toast.warning('이메일코드가 입력되지 않았어요');
		else if (name === '') return toast.warning('이름이 입력되지 않았어요');
		else if (stuId === '') return toast.warning('학번이 입력되지 않았어요');
		else if (!parseInt(stuId)) return toast.warning('학번이 숫자가 아니에요');
		else if (password === '')
			return toast.warning('비밀번호가 입력되지 않았어요');
		else if (repassword === '')
			return toast.warning('비밀번호가 재입력이 입력되지 않았어요');
		if (password !== repassword)
			return toast.warning('입력한 비밀번호가 서로 달라요');
		await signup(id + '@gsm.hs.kr', password, name, stuId);
		toast.success('회원가입이 되었어요');
		navigate('/signin');
	};

	const emailCertify = async () => {
		await auth(id + '@gsm.hs.kr');
		toast.success('인증번호가 위의 이메일로 전송 되었어요');
	};

	const AuthCheck = async (setDisabled) => {
		if (emailCode === '') {
			return toast.warning('아무것도 입력하지 않으셨어요');
		}
		await authCheck(emailCode);
		setDisabled(true);
		toast.info('인증이 완료 되었어요');
	};

	return {
		setId,
		id,
		setEmailCode,
		setStuId,
		setName,
		setPassword,
		setRePassword,
		onSignup,
		emailCertify,
		AuthCheck,
		clicked,
		setClicked,
		disabled,
		setDisabled,
	};
};

const SignupForm: React.FC = () => {
	const {
		setId,
		id,
		setEmailCode,
		setStuId,
		setName,
		setPassword,
		setRePassword,
		onSignup,
		emailCertify,
		AuthCheck,
		clicked,
		setClicked,
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
						onChange={(e) => setId(e.target.value)}
						disabled={disabled}
						maxLength={6}
						required
					/>
					<label>@gsm.hs.kr</label>
				</S.InputWrapper>
				<button
					onClick={() => {
						if (id === '') {
							toast.warning('이메일을 입력하지 않았어요');
						} else {
							setClicked(false);
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
					onChange={(e) => setEmailCode(e.target.value)}
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
				onChange={(e) => setName(e.target.value)}
			/>
			<S.InputStyle
				placeholder="학번을 입력하세요"
				type="text"
				displayed={false}
				onChange={(e) => setStuId(e.target.value)}
				maxLength={4}
				autoComplete="off"
			/>
			<S.InputStyle
				placeholder="비밀번호를 입력하세요"
				type="password"
				displayed={false}
				onChange={(e) => setPassword(e.target.value)}
				autoComplete="off"
			/>
			<S.InputStyle
				placeholder="비밀번호를 재입력하세요"
				type="password"
				displayed={false}
				onChange={(e) => setRePassword(e.target.value)}
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
