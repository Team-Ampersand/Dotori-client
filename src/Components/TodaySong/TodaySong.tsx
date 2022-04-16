import React, { useEffect } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { SongItem, SongRequest } from '../';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { HasToken, isCalendarOpen, setList, showPlaylistDate } from 'Atoms';
import { dateMusic } from 'Api/music';
import CalendarModal from 'Components/CalendarModal/CalendarModal';
import { useRole } from 'Hooks/useRole';
import CheckMySong from 'Components/CheckMySong/CheckMySong';

const TodaySong: React.FC = () => {
	const [songlist, setSongList] = useRecoilState(setList);
	const navigate = useNavigate();
	const setLogged = useSetRecoilState(HasToken);
	const [playlistDate] = useRecoilState(showPlaylistDate);
	const [calendarOpen, setCalendarOpen] = useRecoilState(isCalendarOpen);
	const role = useRole();

	const getDateMusic = async (date: any) => {
		try {
			return await dateMusic(role, date);
		} catch (e: any) {
			if (e.message === 'Request failed with status code 401') {
				alert('로그아웃 되었어요. 다시 로그인 해주세요');

				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				localStorage.removeItem('role');

				navigate('/signin');

				window.location.reload();
			} else if (e.message === 'Request failed with status code 403') {
				alert('로그아웃 되었어요. 다시 로그인 해주세요');

				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				localStorage.removeItem('role');

				navigate('/');
				setLogged(false);
				window.location.reload();
			}
		}
	};

	useEffect(() => {
		getDateMusic(playlistDate).then((res) => {
			setSongList(res?.data.data);
		});
	}, []);

	return (
		<S.Postioner>
			<S.TodaySongWrapper>
				<S.PlaylistContainer>
					<h3>{`${playlistDate}`} Playlist</h3>
					<I.Calander onClick={() => setCalendarOpen(!calendarOpen)} />
				</S.PlaylistContainer>
				<S.AppliedSongCount>
					{`신청된 음악 : ${songlist === undefined ? 0 : songlist.length} 개 `}
				</S.AppliedSongCount>
				{calendarOpen && <CalendarModal visible={calendarOpen} />}
				<S.SongContainer>
					{songlist ? (
						[...songlist].map((data, idx) => {
							return <SongItem songObj={data} key={`${idx}`} />;
						})
					) : (
						<S.NoSongText>
							<I.TextLogo />
							<p>신청된 음악이 없어요</p>
						</S.NoSongText>
					)}
				</S.SongContainer>
			</S.TodaySongWrapper>
			<S.Container>
				<SongRequest />
				<CheckMySong songlists={songlist} />
			</S.Container>
		</S.Postioner>
	);
};

export default TodaySong;
