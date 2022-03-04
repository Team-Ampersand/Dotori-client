import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { SongItem } from '../';
import music from 'Api/music';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';
import { dateFormat } from 'Components/SongItem/SongItem';
import Calendar from 'react-calendar';
import { Calander } from 'Assets/Svg';
import { ManufactureDate } from 'Utils/ManufactureDate';

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
	const history = useHistory();
	const [date, setDate] = useState(false);
	const [showPlaylistDate, setShowPlaylistDate] = useState<string>(
		`${ManufactureDate('Y')}-${('0' + ManufactureDate('M')).slice(-2)}-${(
			'0' + ManufactureDate('D')
		).slice(-2)}`
	);
	const [list, setList] = useState<list[]>([]);
	console.log(date);
	const setLogged = useSetRecoilState(HasToken);
	useEffect(() => {
		getDateMusic(showPlaylistDate)
			.then((res) => {
				setList(res?.data.data);
			})
			.catch((e) => {
				if (e.message === 'Request failed with status code 401') {
					alert(
						'장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요.'
					);

					// deleteCookie('Dotori_accessToken');
					// deleteCookie('Dotori_refreshToken');
					// deleteCookie('role');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					history.push('/signin');

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
				<h3>{`${showPlaylistDate} Playlist`}</h3>
				<S.BtnWrapper>
					<S.DateWrapper isClicked={date} onClick={() => setDate(!date)}>
						<Calander />
						<S.CalanderWrapper isClicked={date}>
							<Calendar
								onChange={(value) =>
									getDateMusic(dateFormat(value)).then((res) => {
										setList(res?.data.data);
										setShowPlaylistDate(dateFormat(value));
									})
								}
							/>
						</S.CalanderWrapper>
					</S.DateWrapper>
				</S.BtnWrapper>
			</S.PlaylistContainer>
			<S.SongContainer>
				{list ? (
					[...list].reverse().map((data, idx) => {
						return <SongItem songObj={data} key={`${idx}`} />;
					})
				) : (
					<S.NoSongText>
						<I.Logo />
						<p>신청한 음악이 없습니다.</p>
					</S.NoSongText>
				)}
			</S.SongContainer>
		</S.Postioner>
	);
};

export default TodaySong;
