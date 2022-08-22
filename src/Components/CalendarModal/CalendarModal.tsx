import React from 'react';
import Calendar from 'react-calendar';
import { dateMusic } from 'Api/music';
import * as S from './Style';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isCalendarOpen, selectDate, setList, showPlaylistDate } from 'Atoms';
import { DateFormatter } from '../../Utils/DateFormatter';
import { useRole } from 'Hooks/useRole';
import { mutate } from 'swr';

type calendar = {
	visible: boolean;
};

const getDateMusic = async (date: any, role: string) => {
	return await dateMusic(role, date);
};

const CalendarModal: React.FC<calendar> = ({ visible }) => {
	const setSongList = useSetRecoilState(setList);
	const [playlistDate, setPlaylistDate] = useRecoilState(showPlaylistDate);
	const [calendarOpen, setCalendarOpen] = useRecoilState(isCalendarOpen);
	const [select, setSelect] = useRecoilState(selectDate);
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
							onChange={(value) => {
								setSelect(new Date(value.getFullYear(), value.getMonth(), value.getDate()));
								getDateMusic(DateFormatter(value), role).then((res) => {
									setSongList(res?.data.data);
									setPlaylistDate(DateFormatter(value));
									mutate(`/${role}/music?date=${playlistDate}`);
								})
							}}
							calendarType="US"
							value={select}
						/>
					</S.CalendarWrapper>
				</S.CalendarContainer>
			)}
		</>
	);
};

export default CalendarModal;
