import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { Logout, Profile } from '../../Assets/Svg';
import member from '../../Api/member';
import mypage from '../../Api/mypage';
import { useSetRecoilState } from 'recoil';
import { HasToken } from '../../Atoms';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteCookie } from 'Utils/Cookie';

type UserProfileType = {
	id: number;
	username: string;
	stuNum: string;
	point: number;
};

const TryLogout = () => {
	const setLogged = useSetRecoilState(HasToken);
	const history = useHistory();

	const onLogout = async () => {
		try {
			await member.logout();
			// deleteCookie('Dotori_accessToken');
			// deleteCookie('Dotori_refreshToken');
			// deleteCookie('role');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			setLogged(false);
			history.push('/');
			alert('로그아웃 되었습니다.');
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

const myPage = async () => {
	const res = await mypage.mypage();
	return res;
};

const UserProfile: React.FC = () => {
	const [profile, setProfile] = useState<UserProfileType>();
	const onLogout = TryLogout();
	const history = useHistory();

	useEffect(() => {
		myPage()
			.then((res) => {
				setProfile(res.data.data);
			})
			.catch((e) => {
				if (e.response.status === 401) {
					alert('로그아웃 되었습니다. 다시 로그인 해주세요.');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					history.push('/signin');
					window.location.reload();
				}
			});
	}, []);
	return (
		<S.Postioner>
			<S.Header>
				<S.LogoutWrapper onClick={onLogout} data-test="test-logout">
					<Logout />
					<span>로그아웃</span>
				</S.LogoutWrapper>
			</S.Header>
			<S.Content>
				<S.UserWrapper>
					<Profile />
					<div>
						<span className="name">{profile?.username}</span> <br />
						<span className="grade">
							{profile?.stuNum.substr(0, 1)}-{profile?.stuNum.substr(1, 1)},{' '}
							{profile?.stuNum.substr(2, 4)}번
						</span>
					</div>
				</S.UserWrapper>
			</S.Content>
			<S.MemberControl>
				<Link to={'/change/password'}>비밀번호 변경</Link>
				<Link to={'/withdrawl'}>회원 탈퇴</Link>
			</S.MemberControl>
			<S.Policy>
				<span>© 2021 Ampersand. All Rights Reserved.</span>
				<p>
					<a
						href="https://github.com/Team-Ampersand"
						target="_blank"
						rel="noreferrer"
					>
						<strong>About</strong>
					</a>{' '}
					|
					<a
						href="https://github.com/Team-Ampersand/Dotori-client/blob/master/LICENSE"
						target="_blank"
						rel="noreferrer"
					>
						<strong> License</strong>
					</a>{' '}
					|
					<a
						href="https://github.com/Team-Ampersand"
						target="_blank"
						rel="noreferrer"
					>
						<strong> Github and issue</strong>
					</a>
				</p>
			</S.Policy>
		</S.Postioner>
	);
};

export default React.memo(UserProfile);
