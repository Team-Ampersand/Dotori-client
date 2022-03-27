import React from 'react';
import Calendar from 'react-calendar';
import { dateMusic } from 'Api/music';
import * as S from './Style';
import { useRecoilState } from 'recoil';
import { isCalendarOpen, setList, showPlaylistDate } from 'Atoms';
import { DateFormatter } from '../../Utils/DateFormatter';
import { useRole } from 'Hooks/useRole';

type calendar = {
	visible: boolean;
};

const getDateMusic = async (date: any, role: string) => {
	try {
		return await dateMusic(role, date);
	} catch (e) {
		alert(e);
	}
};

const CalendarModal: React.FC<calendar> = ({ visible }) => {
	const [, setSongList] = useRecoilState(setList);
	const [calendarOpen, setCalendarOpen] = useRecoilState(isCalendarOpen);
	const [, setPlaylistDate] = useRecoilState(showPlaylistDate);
	const role = useRole();

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
								getDateMusic(DateFormatter(value), role).then((res) => {
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
