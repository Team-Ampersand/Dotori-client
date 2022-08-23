import React, { useEffect } from 'react';
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

	useEffect(() => {
		getDateMusic(DateFormatter(select), role).then((res) => {
			console.log(select);
			setSongList(res?.data.data);
			setPlaylistDate(DateFormatter(select));
			mutate(`/${role}/music?date=${playlistDate}`);
		})
	}, [select])

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
								setSelect(value);
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
