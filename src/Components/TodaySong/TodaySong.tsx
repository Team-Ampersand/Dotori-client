import React, { useEffect } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { SongItem, SongRequest } from '../';
import { useRecoilState } from 'recoil';
import { isCalendarOpen, setList, showPlaylistDate } from 'Atoms';
import { dateMusic } from 'Api/music';
import CalendarModal from 'Components/CalendarModal/CalendarModal';
import { useRole } from 'Hooks/useRole';
import CheckMySong from 'Components/CheckMySong/CheckMySong';

const TodaySong: React.FC = () => {
	const [songlist, setSongList] = useRecoilState(setList);
	const [playlistDate] = useRecoilState(showPlaylistDate);
	const [calendarOpen, setCalendarOpen] = useRecoilState(isCalendarOpen);
	const role = useRole();

	const getDateMusic = async (date: any) => {
		return await dateMusic(role, date);
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
