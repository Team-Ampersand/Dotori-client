import React from 'react';
import { SongEvent } from '..';
import * as S from './Style';

type EventObj = {
	song: {
		songAuthor: string;
		songName: string;
		arriTime: string;
		thumbnailKey: string;
	};
};

interface EventListProps {
	eventObject: EventObj;
}

const EventList: React.FC<EventListProps> = ({ eventObject }) => {
	return (
		<S.Postioner>
			<SongEvent
				song={eventObject.song}
				onClickFunc={() => alert('기상음악 신청 이벤트 클릭')}
			/>
		</S.Postioner>
	);
};

export default EventList;
