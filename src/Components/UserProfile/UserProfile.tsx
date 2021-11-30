import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { Logout, Point, Profile } from '../../Assets/Svg';
import member from '../../Api/member';
import mypage from '../../Api/mypage';
import { useSetRecoilState } from 'recoil';
import { HasToken } from '../../Atoms';
import { useHistory } from 'react-router';

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
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');

			setLogged(false);
			history.push('/signin');
		} catch (e) {
			alert(e);
		}
	};
	return [onLogout];
};

const myPage = async () => {
	const res = await mypage.mypage();
	return res;
};

const UserProfile: React.FC = () => {
	const [profile, setProfile] = useState<UserProfileType>();
	const [onLogout] = TryLogout();
	const history = useHistory();

	useEffect(() => {
		myPage()
			.then((res) => {
				setProfile(res.data.data);
			})
			.catch((e) => {
				if (e.response.status === 401) {
					history.push('/signin');
					alert(
						'장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요.'
					);
					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
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
				<S.PointWrapper>
					<Point />
					<span>상벌점</span>
					<S.PointProgress>
						<S.ActiveProgress />
					</S.PointProgress>
					<sub>{profile?.point}</sub>
				</S.PointWrapper>
			</S.Content>
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

export default UserProfile;
