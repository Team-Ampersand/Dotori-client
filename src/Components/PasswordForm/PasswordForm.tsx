import { DotoriLogoV2 } from 'Assets/Svg';
import React, { useState } from 'react';
import * as S from './Style';
import { authPassword, findPassword, passwordChange } from 'Api/member';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthPassword = async (id: string, setDisabled, setDisplayed) => {
	await authPassword(id + '@gsm.hs.kr', setDisplayed);
	toast.info('이메일을 확인해주세요');
	setDisabled(false);
};

const FindPassword = async (
	newPw: string,
	emailCode: string,
	navigate: NavigateFunction
) => {
	try {
		await findPassword(newPw, emailCode);
		toast.success('비밀번호가 변경 되었어요!');
		navigate('/signin');
	} catch (e) {}
};

const changePassword = async (password: string, newPw: string, navigate) => {
	await passwordChange(password, newPw, navigate);
};

const returnPassworForm = (
	setPassword: {
		(value: React.SetStateAction<string>): void;
		(arg0: string): void;
	},
	setNewPw: {
		(value: React.SetStateAction<string>): void;
		(arg0: string): void;
	},
	setRepassword: React.Dispatch<React.SetStateAction<string>>,
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>,
	setId: React.Dispatch<React.SetStateAction<string>>,
	setDisplayed: React.Dispatch<React.SetStateAction<boolean>>,
	setEmailCode: React.Dispatch<React.SetStateAction<string>>,
	password: string,
	newPw: string,
	repassword: string,
	disabled: boolean | undefined,
	id: string,
	displayed: boolean | undefined,
	emailCode: string,
	navigate: NavigateFunction
) => {
	if (window.location.pathname === '/password') {
		return (
			<>
				<S.EmailContainer>
					<S.InputWrapper>
						<label>@gsm.hs.kr</label>
						<S.InputStyle
							placeholder="이메일"
							type="text"
							maxLength={6}
							onChange={({ target: { value } }) => setId(value)}
							disabled={disabled}
						/>
					</S.InputWrapper>

					<button
						onClick={() => {
							AuthPassword(id, setDisabled, setDisplayed);
							setDisplayed(false);
						}}
					>
						인증
					</button>
				</S.EmailContainer>
				<S.InputStyle
					placeholder="이메일코드"
					type="text"
					displayed={displayed}
					onChange={({ target: { value } }) => setEmailCode(value)}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) => setNewPw(value)}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호 재입력"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) => setRepassword(value)}
				/>
				<S.ButtonStyle
					onClick={() => {
						if (newPw !== repassword)
							toast.warning('입력한 비밀번호가 서로 달라요');
						else FindPassword(newPw, emailCode, navigate);
					}}
				>
					비밀번호 변경
				</S.ButtonStyle>
				<S.Line />
				<S.ExplainWrapper>
					<span>비밀번호가 기억 나셨나요?</span>
					<Link to="/signin">로그인으로 돌아가기</Link>
				</S.ExplainWrapper>
			</>
		);
	} else {
		return (
			<>
				<S.InputStyle
					placeholder="현재 비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) => setPassword(value)}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) => setNewPw(value)}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호 재입력"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) => setRepassword(value)}
				/>
				<S.ButtonStyle
					onClick={() => {
						if (newPw !== repassword)
							toast.warning('입력한 비밀번호가 서로 달라요');
						else changePassword(password, newPw, navigate);
					}}
				>
					비밀번호 변경
				</S.ButtonStyle>
				<S.Line />
				<S.ExplainWrapper>
					<span>변경하실 필요가 없으시나요?</span>
					<Link to="/home">돌아가기</Link>
				</S.ExplainWrapper>
			</>
		);
	}
};

const PasswordForm: React.FC = () => {
	const navigate = useNavigate();
	const [id, setId] = useState('');
	const [emailCode, setEmailCode] = useState('');
	const [password, setPassword] = useState('');
	const [newPw, setNewPw] = useState('');
	const [repassword, setRepassword] = useState('');
	const [displayed, setDisplayed] = useState(true);
	const [disabled, setDisabled] = useState(false);

	return (
		<S.Positioner>
			<DotoriLogoV2 />
			{returnPassworForm(
				setPassword,
				setNewPw,
				setRepassword,
				setDisabled,
				setId,
				setDisplayed,
				setEmailCode,
				password,
				newPw,
				repassword,
				disabled,
				id,
				displayed,
				emailCode,
				navigate
			)}
		</S.Positioner>
	);
};

export default PasswordForm;
