import React from 'react';
import Calendar from 'react-calendar';
import music from 'Api/music';
import * as S from './Style';
import { useRecoilState } from 'recoil';
import { isCalendarOpen, setList, showPlaylistDate } from 'Atoms';
import { DateFormatter } from '../../Utils/DateFormatter';

type calendar = {
	visible: boolean;
};

const getDateMusic = async (date: any) => {
	try {
		return await music.dateMusic(date);
	} catch (e) {
		alert(e);
	}
};

const CalendarModal: React.FC<calendar> = ({ visible }) => {
	const [, setSongList] = useRecoilState(setList);
	const [calendarOpen, setCalendarOpen] = useRecoilState(isCalendarOpen);
	const [, setPlaylistDate] = useRecoilState(showPlaylistDate);

	return (
		<>
			{calendarOpen && (
				<S.CalendarContainer>
					<S.CalendarOverlay
						visible={visible}
						onClick={() => setCalendarOpen(false)}
					/>
					<S.CalendarWrapper>
						<Calendar
							onChange={(value) =>
								getDateMusic(DateFormatter(value)).then((res) => {
									setSongList(res?.data.data);
									setPlaylistDate(DateFormatter(value));
								})
							}
							calendarType="US"
						/>
					</S.CalendarWrapper>
				</S.CalendarContainer>
			)}
		</>
	);
};

export default CalendarModal;
