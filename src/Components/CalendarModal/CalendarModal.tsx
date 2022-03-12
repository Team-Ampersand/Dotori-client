import React, { useState } from 'react';
import { dateFormat } from 'Components/SongItem/SongItem';
import Calendar from 'react-calendar';
import music from 'Api/music';
import { ManufactureDate } from 'Utils/ManufactureDate';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { useRecoilState } from 'recoil';
import { showPlaylistDate } from 'Atoms';

type list = {
	id: number;
	url: string;
	memberName: string;
	createdDate: Date;
	email: string;
};

export const getDateMusic = async (date: any) => {
	try {
		return await music.dateMusic(date);
	} catch (e) {
		alert(e);
	}
};

const CalendarModal = () => {
	const [list, setList] = useState<list[]>([]);
	const [showCalendar, setShowCalendar] = useState(false);
	const [playlistDate, setPlaylistDate] = useRecoilState(showPlaylistDate);

	return (
		<S.PlaylistContainer>
			<h3>{`${playlistDate} Playlist`}</h3>

			<S.DateWrapper isClicked={showCalendar}>
				<I.Calander onClick={() => setShowCalendar(!showCalendar)} />
				<S.CalanderWrapper isClicked={showCalendar}>
					<Calendar
						onClickDay={(value) =>
							getDateMusic(dateFormat(value)).then((res) => {
								setList(res?.data.data);
								setPlaylistDate(dateFormat(value));
							})
						}
						calendarType="US"
					/>
				</S.CalanderWrapper>
			</S.DateWrapper>
		</S.PlaylistContainer>
	);
};

export default CalendarModal;
