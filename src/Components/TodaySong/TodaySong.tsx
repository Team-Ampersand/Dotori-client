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
import useSWR, { mutate } from 'swr';
import { apiClient } from 'Utils/Libs/apiClient';
import { MusicController } from 'Utils/Libs/requestUrls';
import { DateFormatter } from 'Utils/DateFormatter';

interface MusicType {
	data: {
		data: [
			{
				createdDate: Date;
				email: string;
				id: number;
				memberName: string;
				url: string;
			}
		];
	};
}

const TodaySong: React.FC = () => {
	const [songlist, setSongList] = useRecoilState(setList);
	const [playlistDate] = useRecoilState(showPlaylistDate);
	const [calendarOpen, setCalendarOpen] = useRecoilState(isCalendarOpen);
	const role = useRole();
	const { data, error } = useSWR<MusicType>(
		MusicController.dateMusic(role, playlistDate),
		apiClient.get
	);

	const getDateMusic = async (date: any) => {
		return await dateMusic(role, date);
	};

	useEffect(() => {
		getDateMusic(playlistDate).then((res) => {
			setSongList(res?.data.data);
			mutate(`/${role}/music?date=${playlistDate}`);
		});
	}, []);

	if (!data) return <div></div>;
	if (error) return <div></div>;
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
					{data.data.data ? (
						data.data.data.map((data, idx) => {
							return (
								<SongItem
									url={data.url}
									id={data.id}
									createdDate={data.createdDate}
									memberName={data.memberName}
									email={data.email}
									key={`${idx}`}
								/>
							);
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
