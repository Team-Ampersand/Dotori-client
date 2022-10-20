import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { Profile, Male, Female } from '../../Assets/Svg';
import { logout } from '../../Api/member';
import { mypage } from '../../Api/mypage';
import {  useSetRecoilState } from 'recoil';
import { HasToken , Gender } from '../../Atoms';
import { useNavigate, Link } from 'react-router-dom';
import { PenaltyInfoModal } from 'Components';
import { ManufactureDate } from 'Utils/ManufactureDate';
import { toast } from 'react-toastify';

type UserProfileType = {
	id: number;
	memberName: string;
	stuNum: string;
	gender: string;
};

const TryLogout = () => {
	const setLogged = useSetRecoilState(HasToken);
	const navigate = useNavigate();

	const onLogout = async () => {
		await logout();

		localStorage.removeItem('Dotori_accessToken');
		localStorage.removeItem('Dotori_refreshToken');
		localStorage.removeItem('role');

		setLogged(false);
		navigate('/');
		toast.info('로그아웃 되었어요');
		window.location.reload();
	};
	return onLogout;
};

const myPage = async () => {
	const res = await mypage();
	return res;
};

const UserProfile: React.FC = () => {
	const [profile, setProfile] = useState<UserProfileType>();
	const onLogout = TryLogout();
	const [modalState, setModalState] = useState(false);
	const setGender = useSetRecoilState(Gender);

	const closeModal = () => setModalState(false);

	useEffect(() => {
		myPage().then((res: any) => {
			setProfile(res.data.data);
			setGender(res.data.data.gender);
		});
	}, []);
	return (
		<>
			{modalState && (
				<PenaltyInfoModal modalState={modalState} closeModal={closeModal} />
			)}
			<S.Postioner>
				<S.Header>
					<h3>프로필</h3>
					<S.LogoutWrapper onClick={onLogout} data-test="test-logout">
						<span>로그아웃</span>
					</S.LogoutWrapper>
				</S.Header>
				<S.Content>
					<S.UserWrapper>
						{profile?.gender === 'PENDING' ? (
							<Profile />
						) : profile?.gender === 'MAN' ? (
							<Male />
						) : (
							<Female />
						)}
						<div>
							<span className="name">{profile?.memberName}</span>
							<span className="grade">{profile?.stuNum}</span>
						</div>
						<S.PenaltyBtn onClick={() => setModalState(true)}>
							규정 위반 내역
						</S.PenaltyBtn>
						<Link to={'/change/password'}>비밀번호 변경</Link>
					</S.UserWrapper>
				</S.Content>
				<S.Policy>
					<span>© {ManufactureDate('Y')} Ampersand. All Rights Reserved.</span>
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
		</>
	);
};

export default React.memo(UserProfile);
