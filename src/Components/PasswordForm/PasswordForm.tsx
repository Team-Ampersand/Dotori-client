import { DotoriLogoV2 } from 'Assets/Svg';
import React, { useState } from 'react';
import * as S from './Style';
import { authPassword, findPassword, passwordChange } from 'Api/member';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type UserType = {
	id: string;
	emailCode: string;
	password: string;
	newPassword: string;
	rePassword: string;
};

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
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>,
	setDisplayed: React.Dispatch<React.SetStateAction<boolean>>,
	setUser: React.Dispatch<React.SetStateAction<UserType>>,
	user: UserType,
	disabled: boolean | undefined,
	displayed: boolean | undefined,
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
							onChange={({ target: { value } }) =>
								setUser({ ...user, id: value })
							}
							disabled={disabled}
						/>
					</S.InputWrapper>

					<button
						onClick={() => {
							AuthPassword(user.id, setDisabled, setDisplayed);
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
					onChange={({ target: { value } }) =>
						setUser({ ...user, emailCode: value })
					}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) =>
						setUser({ ...user, newPassword: value })
					}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호 재입력"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) =>
						setUser({ ...user, rePassword: value })
					}
				/>
				<S.ButtonStyle
					onClick={() => {
						if (user.newPassword !== user.rePassword) {
							toast.warning('입력한 비밀번호가 서로 달라요');
						} else FindPassword(user.newPassword, user.emailCode, navigate);
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
					onChange={({ target: { value } }) =>
						setUser({ ...user, password: value })
					}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) =>
						setUser({ ...user, newPassword: value })
					}
				/>
				<S.InputStyle
					placeholder="새로운 비밀번호 재입력"
					type="password"
					displayed={false}
					onChange={({ target: { value } }) =>
						setUser({ ...user, rePassword: value })
					}
				/>
				<S.ButtonStyle
					onClick={() => {
						if (user.newPassword !== user.rePassword)
							toast.warning('입력한 비밀번호가 서로 달라요');
						else changePassword(user.password, user.newPassword, navigate);
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
	const [user, setUser] = useState<UserType>({} as UserType);
	const [displayed, setDisplayed] = useState(true);
	const [disabled, setDisabled] = useState(false);

	return (
		<S.Positioner>
			<DotoriLogoV2 />
			{returnPassworForm(
				setDisabled,
				setDisplayed,
				setUser,
				user,
				disabled,
				displayed,
				navigate
			)}
		</S.Positioner>
	);
};

export default PasswordForm;
