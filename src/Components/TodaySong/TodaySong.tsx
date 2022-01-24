import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { SongItem } from '../';
import music from 'Api/music';
import { useHistory } from 'react-router';
import { deleteCookie } from 'Utils/Cookie';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';

type list = {
	id: number;
	url: string;
	memberName: string;
	createdDate: Date;
};

const musicLookup = async () => {
	try {
		const res = await music.musicLookup();
		return res;
	} catch (e) {}
};

const TodaySong: React.FC = () => {
	const history = useHistory();
	const [all, setAll] = useState(true);
	const [today, setToday] = useState(false);
	const [list, setList] = useState<list[]>([]);
	const setLogged = useSetRecoilState(HasToken);
	useEffect(() => {
		musicLookup()
			.then((res) => {
				setList(res?.data.data);
			})
			.catch((e) => {
				if (e.message === 'Request failed with status code 401') {
					history.push('/signin');
					alert(
						'장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요.'
					);

					// deleteCookie('Dotori_accessToken');
					// deleteCookie('Dotori_refreshToken');
					// deleteCookie('role');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					window.location.reload();
				} else if (e.message === 'Request failed with status code 403') {
					alert('로그아웃 되었습니다. 다시 로그인 해주세요.');

					// deleteCookie('Dotori_accessToken');
					// deleteCookie('Dotori_refreshToken');
					// deleteCookie('role');

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
			<S.PlaylistContainer>
				<h3>{all ? 'Month Playlist' : 'Date Playlist'}</h3>
			</S.PlaylistContainer>
			<S.SongContainer>
				{list &&
					[...list].reverse().map((data, idx) => {
						return <SongItem songObj={data} key={`${idx}`} />;
					})}
			</S.SongContainer>
		</S.Postioner>
	);
};

export default TodaySong;
