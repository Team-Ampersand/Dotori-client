import React from 'react';
import { LaptopEvent, SongEvent } from '..'
import * as S from './Style';

type EventObj = {
    laptop: {
        laptopRoom: string,
        laptopSeat: string
    },
    song: {
        songAuthor: string,
        songName: string,
        arriTime: string,
        thumbnailKey: string
    }
}

interface EventListProps {
    eventObject: EventObj
}

const EventList: React.FC<EventListProps> = ({ eventObject }) => {
    return (
        <S.Postioner>
            <LaptopEvent laptop={eventObject.laptop} onClickFunc={() => alert("노트북 대여 이벤트 클릭")}/>
            <SongEvent song={eventObject.song} onClickFunc={() => alert("기상음악 신청 이벤트 클릭")}/>
        </S.Postioner>
    )
}

export default EventList;