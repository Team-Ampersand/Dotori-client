import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { SongItem } from '../';
import music from 'Api/music';
import { useHistory } from 'react-router';
import { deleteCookie } from 'Utils/Cookie';
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

const musicLookup = async () => {
	try {
		const res = await music.musicLookup();
		return res;
	} catch (e) {}
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
	const [all, setAll] = useState(true);
	const [date, setDate] = useState(false);
	const [showDate, setShowDate] = useState(
		`${ManufactureDate('Y')}-${('0' + ManufactureDate('M')).slice(-2)}-${(
			'0' + ManufactureDate('D')
		).slice(-2)}`
	);
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
				<h3>
					{all ? `${ManufactureDate('M')}월 Playlist` : `${showDate} Playlist`}
				</h3>
				<S.BtnWrapper>
					<S.AllWrapper
						onClick={() => {
							musicLookup().then((res) => {
								setList(res?.data.data);
								setAll(true);
								setDate(false);
							});
						}}
						isClicked={all}
					>
						전체
					</S.AllWrapper>
					<S.DateWrapper
						isClicked={date}
						onClick={() =>
							getDateMusic(showDate).then((res) => {
								setList(res?.data.data);
								setAll(false);
								setDate(!date);
							})
						}
					>
						<Calander />
						<S.CalanderWrapper isClicked={date}>
							<Calendar
								onChange={(value) =>
									getDateMusic(dateFormat(value)).then((res) => {
										setList(res?.data.data);
										setAll(false);
										setDate(!Date);
										setShowDate(dateFormat(value));
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
					<S.NoSongText>신청한 음악이 없습니다.</S.NoSongText>
				)}
			</S.SongContainer>
		</S.Postioner>
	);
};

export default TodaySong;
