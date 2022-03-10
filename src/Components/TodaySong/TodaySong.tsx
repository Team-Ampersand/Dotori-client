import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { SongItem } from '../';
import music from 'Api/music';
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	const [date, setDate] = useState(false);
	const [showPlaylistDate, setShowPlaylistDate] = useState<string>(
		`${ManufactureDate('Y')}-${('0' + ManufactureDate('M')).slice(-2)}-${(
			'0' + ManufactureDate('D')
		).slice(-2)}`
	);
	const [list, setList] = useState<list[]>([]);
	const setLogged = useSetRecoilState(HasToken);
	useEffect(() => {
		getDateMusic(showPlaylistDate)
			.then((res) => {
				setList(res?.data.data);
			})
			.catch((e) => {
				if (e.response.status === 401) {
					alert('로그아웃 되었어요. 다시 로그인 해주세요');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					navigate('/signin');

					window.location.reload();
				} else if (e.response.status === 403) {
					alert('로그아웃 되었어요. 다시 로그인 해주세요');

					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					localStorage.removeItem('role');

					navigate('/');
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
						<p>신청된 음악이 없어요</p>
					</S.NoSongText>
				)}
			</S.SongContainer>
		</S.Postioner>
	);
};

export default TodaySong;
