import { LoginArrow } from '../../Assets/Svg';
import React from 'react';
import * as S from './Style';

const returnButtonValue = (currentPath) => {
	if (currentPath === '/signin') return '로그인';
	else if (currentPath === '/signup') return '회원가입';
	else if (currentPath === '/password') return '임시 비밀번호 발급';
};

const Button: React.FC = () => {
	return (
		<>
			<S.ButtonStyle>
				{returnButtonValue(window.location.pathname)}
				<S.ArrowWrapper>
					<LoginArrow />
				</S.ArrowWrapper>
			</S.ButtonStyle>
		</>
	);
};

export default Button;
