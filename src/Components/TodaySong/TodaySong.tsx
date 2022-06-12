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
import { ManufactureDate } from 'Utils/ManufactureDate';

interface MusicType {
	data: {
		data: [
			{
				createdDate: Date;
				email: string;
				id: number;
				memberName: string;
				url: string;
				stuNum: string;
			}
		];
	};
}

const TodaySong: React.FC = () => {
	const [songlist, setSongList] = useRecoilState(setList);
	const [playlistDate, setPlaylistDate] = useRecoilState(showPlaylistDate);
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
		setPlaylistDate(
			`${ManufactureDate('Y')}-${('0' + ManufactureDate('M')).slice(-2)}-${(
				'0' + ManufactureDate('D')
			).slice(-2)}`
		);
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
					<p>
						{`신청된 음악 : ${data.data.data === undefined ? 0 : data.data.data.length
							} 개 `}
					</p>
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
									stuNum={data.stuNum}
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
		</S.Postioner>
	);
};

export default TodaySong;
