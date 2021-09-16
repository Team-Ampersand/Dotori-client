import { LoginArrow } from '../../Assets/Svg';
import React from 'react';
import * as S from './Style';
import { useHistory, useLocation } from 'react-router';

const returnButtonValue = (currentPath) => {
	if (currentPath === '/signin') return '로그인';
	else if (currentPath === '/signup') return '회원가입';
	else if (currentPath === '/password') return '임시 비밀번호 발급';
};

const returnParamValue = () => {
	if (window.location.pathname === '/signin') {
		return '/';
	} else if (window.location.pathname === '/signup') {
		return '/signin';
	} else if (window.location.pathname === 'password') {
		return '/signin';
	} else return '';
};

const Button: React.FC = () => {
	const history = useHistory();
	return (
		<>
			<S.ButtonStyle
				onClick={() => {
					alert(
						`${returnButtonValue(window.location.pathname)}에 성공하셨습니다.`
					);
					history.push(returnParamValue());
					window.location.reload();
				}}
			>
				{returnButtonValue(window.location.pathname)}
				<S.ArrowWrapper>
					<LoginArrow />
				</S.ArrowWrapper>
			</S.ButtonStyle>
		</>
	);
};

export default Button;
