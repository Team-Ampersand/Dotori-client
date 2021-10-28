import React from 'react';
import * as S from './Style';
import { Logout, Point, Profile } from '../../Assets/Svg';
import member from '../../Api/member';
import { useSetRecoilState } from 'recoil';
import { HasToken } from '../../Atoms';
import { useHistory } from 'react-router';

type UserProfileType = {
	name: string;
	grade: string;
	class: string;
};

interface ProfileProps {
	userProfile: UserProfileType;
}

const TryLogout = () => {
	const setLogged = useSetRecoilState(HasToken);
	const history = useHistory();

	const onLogout = async () => {
		try {
			const res = await member.logout();
			if (res.data.success) {
				localStorage.removeItem('Dotori_refreshToken');

				setLogged(false);
				history.push('/signin');
			}
		} catch (e) {
			alert(e);
		}
	};
	return [onLogout];
};

const UserProfile: React.FC<ProfileProps> = ({ userProfile }) => {
	const [onLogout] = TryLogout();
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
						<span className="name">{userProfile.name}</span>
						<span className="grade">
							{userProfile.grade}-{userProfile.class}
						</span>
					</div>
				</S.UserWrapper>
				<S.PointWrapper>
					<Point />
					<span>상벌점</span>
					<S.PointProgress>
						<S.ActiveProgress />
					</S.PointProgress>
					<sub>-5</sub>
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
