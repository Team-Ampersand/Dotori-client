import React, { useState, useEffect } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { SongItem } from '../';
import { useHistory } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { HasToken, showPlaylistDate } from 'Atoms';
import music from 'Api/music';
import CalendarModal from 'Components/CalendarModal/CalendarModal';

type list = {
	id: number;
	url: string;
	memberName: string;
	createdDate: Date;
	email: string;
};

const getDateMusic = async (date: any) => {
	try {
		return await music.dateMusic(date);
	} catch (e) {
		alert(e);
	}
};

const TodaySong: React.FC = () => {
	const [list, setList] = useState<list[]>([]);
	const history = useHistory();
	const setLogged = useSetRecoilState(HasToken);
	const [playlistDate, setPlaylistDate] = useRecoilState(showPlaylistDate);

	useEffect(() => {
		getDateMusic(playlistDate)
			.then((res) => {
				setList(res?.data.data);
			})
			.catch((e) => {
				if (e.response.status === 401) {
					alert('로그아웃 되었어요. 다시 로그인 해주세요');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					history.push('/signin');

					window.location.reload();
				} else if (e.response.status === 403) {
					alert('로그아웃 되었어요. 다시 로그인 해주세요');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					history.push('/');
					setLogged(false);
					window.location.reload();
				}
			});
	}, []);

	return (
		<S.Postioner>
			<CalendarModal />
			<S.SongContainer>
				{list ? (
					[...list].reverse().map((data, idx) => {
						return <SongItem songObj={data} key={`${idx}`} />;
					})
				) : (
					<S.NoSongText>
						<I.Logo />
						<p>신청된 음악이 없어요</p>
					</S.NoSongText>
				)}
			</S.SongContainer>
		</S.Postioner>
	);
};

export default TodaySong;
