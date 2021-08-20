import React from 'react';
import * as S from './Style';

type roomObj = {
    roomName: string,
    maxSeat: number,
    minSeat: number
}

interface RoomItemProps {
    room: roomObj,
    roomNowIx: number,
    onPressRoom: (value : string) => void;
}

const dummyRoom = ["자", "1", "2", "3", "4"]

const returnRoomStatus = (compareMax: number, compareMin: number) => {
    if ((compareMax / 2) / 2 > compareMin) {
        return "보통";
    } else if (compareMax / 2 > compareMin) {
        return "여유";
    } else {
        return "혼잡";
    }
}

const returnRoomStatusNumber = (compareMax: number, compareMin: number) => {
    if ((compareMax / 2) / 2 > compareMin) {
        return '#28C842';
    } else if (compareMax / 2 > compareMin) {
        return '#F8C600';
    } else {
        return '#E11A1A';
    }
}

const returnRoomStatusColor = (compareMax: number, compareMin: number) => {
    return returnRoomStatusNumber(compareMax, compareMin)
}

const mappingSimpleRoom = (nowIndex: number, compareMax: number, compareMin: number) =>
    dummyRoom.map((item, ix) =>
        <S.SimpleRoom isSelf={ix === 0 ? true : false} key={`simple-room-${ix}`} statusColor={nowIndex === ix ? returnRoomStatusColor(compareMax, compareMin) : ''}>
            <span>{item}</span>
        </S.SimpleRoom>)


const RoomItem: React.FC<RoomItemProps> = ({ room, roomNowIx, onPressRoom }) => {
    return (
        <S.Postioner onClick={() => onPressRoom(room.roomName)}>
            <S.LeftDivision statusColor={returnRoomStatusNumber(room.maxSeat, room.minSeat)}>
                <header>
                    <div className="circle" />
                    <span>{returnRoomStatus(room.maxSeat, room.minSeat)}</span>
                </header>
                <div className="content">
                    <h2>{room.roomName}실</h2>
                </div>
                <footer>
                    <span>현재예약 <strong>{room.minSeat}</strong>/{room.maxSeat}명</span>
                </footer>
            </S.LeftDivision>
            <S.RightDivision>
                {mappingSimpleRoom(roomNowIx, room.maxSeat, room.minSeat)}
            </S.RightDivision>
        </S.Postioner>
    )
}

export default RoomItem;