import * as S from './Style';
import Logo from 'Assets/Svg/Logo';
import { HasToken } from 'Atoms';
import { useSetRecoilState } from 'recoil';
import React from 'react';
import { logout } from 'Api/member';
import isLogin from 'Utils/Libs/isLogin';
import { ManufactureDate } from 'Utils/ManufactureDate';
import { TextLogo } from 'Assets/Svg';

const TryLogout = (setLogged) => {
	const onLogout = async () => {
		try {
			await logout();
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');
			setLogged(false);
			window.location.reload();
		} catch (e: any) {
			if (e.message === 'Request failed with status code 401') {
				alert('로그아웃 되었습니다. 다시 로그인 해주세요.');

				// deleteCookie('Dotori_accessToken');
				// deleteCookie('Dotori_refreshToken');
				// deleteCookie('role');

				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				localStorage.removeItem('role');

				window.location.reload();
			}
		}
	};
	return onLogout;
};

const PromotionPage: React.FC = () => {
	const setLogged = useSetRecoilState(HasToken);

	const onLogout = TryLogout(setLogged);

	return (
		<>
			<S.Positioner>
				<S.Header>
					<TextLogo />
					{!isLogin() ? (
						<S.BtnWrapper>
							<S.SignBtn to="/signin">로그인</S.SignBtn>
							<S.SignBtn to="/signup">회원가입</S.SignBtn>
						</S.BtnWrapper>
					) : (
						<S.BtnWrapper>
							<S.SignBtn to="/" onClick={onLogout}>
								로그아웃
							</S.SignBtn>
						</S.BtnWrapper>
					)}
				</S.Header>
				<S.StyledLink to="/home">
					<h1>D O T O R I</h1>
				</S.StyledLink>
				<p>기숙사 통합 관리 시스템</p>
				<S.Btn to="/home">홈으로</S.Btn>
				<S.Footer>
					<h1>{ManufactureDate('Y')} Team-&mpersand</h1>
				</S.Footer>
			</S.Positioner>
		</>
	);
};

export default PromotionPage;
