import React from 'react';
import { RoomItem } from '..'
import * as S from './Style';
import { ChangeLaptopType } from '../../Components';

type roomObj = {
    roomName: string,
    maxSeat: number,
    minSeat: number
}

interface LaptopProps {
    roomData: roomObj[];
    onPressRoom: (value: string) => void;
}

const mappingBoardList = (roomList: roomObj[], onPressRoom: (value : string) => void) => roomList.map((item, ix) => returnBoardListComponent(item, ix, onPressRoom))

const returnBoardListComponent = (roomDetail: roomObj, ix: number, onPressRoom: (value : string) => void) => <RoomItem room={roomDetail} roomNowIx={ix} key={`room-list-${ix}`} onPressRoom={(value : string) => onPressRoom(value)} />;

const LaptopRoom: React.FC<LaptopProps> = ({ roomData, onPressRoom }) => {
    return (
        <S.Postioner>
            <label>학습실 선택</label>
            <S.ScrollWrapper>
                {mappingBoardList(roomData, onPressRoom)}
            </S.ScrollWrapper>
        </S.Postioner>
    )
}

export default LaptopRoom;