import React, { useState } from 'react';
import { DotoriLogo } from '../../Assets/Svg';
import * as S from './Style';
import { Link } from 'react-router-dom';
import member from '../../Api/member';
import email from '../../Api/email';
import { useHistory } from 'react-router';

const TrySignup = () => {
	const [id, setId] = useState('');
	const [emailCode, setEmailCode] = useState('');
	const [stuId, setStuId] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setRePassword] = useState('');
	const history = useHistory();

	const onSignup = async () => {
		try {
			await member.signup(id, password, name, stuId);
			history.push('/signin');
		} catch (e) {
			alert(e);
		}
	};

	const emailCertify = async () => {
		try {
			await email.auth(id);
			alert('인증번호가 위의 이메일로 전송 되었습니다.');
		} catch (e) {
			alert(e);
		}
	};

	const authCheck = async () => {
		try {
			await email.authCheck(emailCode);
			alert('인증이 완료 되었습니다.');
		} catch (e) {
			alert(e);
		}
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
		authCheck,
	};
};

const SignupForm: React.FC = () => {
	const [clicked, setClicked] = useState(true);
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
		authCheck,
	} = TrySignup();
	return (
		<S.Positioner>
			<DotoriLogo />
			<S.EmailContainer>
				<S.InputStyle
					placeholder="이메일을 입력하세요"
					type="text"
					displayed={false}
					onChange={(e) => setId(e.target.value)}
				/>
				<button
					onClick={() => {
						if (id === '') {
							alert('이메일을 입력하지 않았습니다.');
						} else {
							setClicked(false);
							emailCertify();
						}
					}}
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
				/>
				<S.CertifyButton
					displayed={clicked}
					onClick={() => {
						authCheck();
					}}
				>
					확인
				</S.CertifyButton>
			</S.EmailContainer>
			<S.InputStyle
				placeholder="이름을 입력하세요."
				type="text"
				displayed={false}
				onChange={(e) => setName(e.target.value)}
			/>
			<S.InputStyle
				placeholder="학번을 입력하세요"
				type="text"
				displayed={false}
				onChange={(e) => setStuId(e.target.value)}
			/>
			<S.InputStyle
				placeholder="비밀번호를 입력하세요."
				type="password"
				displayed={false}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<S.InputStyle
				placeholder="비밀번호를 재입력하세요."
				type="password"
				displayed={false}
				onChange={(e) => setRePassword(e.target.value)}
			/>
			<S.ButtonStyle
				onClick={() => {
					onSignup();
				}}
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
function value(value: any) {
	throw new Error('Function not implemented.');
}
