import React from 'react'
import * as S from "./Style"
import { ManufactureDate } from '../../Utils/ManufactureDate'

const Room = {
        currentRoom:44,
        roomMax:50
}

const returnRoomStatusNumber = (compareMax: number, compareMin: number) => {
    if (compareMax / 2 > compareMin) {
        return '#28C842';
    } else if ((compareMax) * (7 / 8) > compareMin) {
        return '#F8C600';
    } else {
        return '#E11A1A';
    }
}

const Selfstudyboard: React.FC = () => {
    return (
        <S.Positioner>
            <S.StudyHeader>
                <h2>자습신청</h2>
                <div onClick={() => alert("신청 목록을 클릭하셨습니다")}>
                    <span>신청 현황</span>
                </div>
            </S.StudyHeader>
            <S.StudyContent>
                <strong>
                    {ManufactureDate("Y")}년 {ManufactureDate("M")}월{" "}
                    {ManufactureDate("D")}일 {ManufactureDate("W")}요일
                </strong>
                <span>{Room.currentRoom}/{Room.roomMax}</span>
                <S.PointProgress>
                    <S.ActiveProgress statusColor={returnRoomStatusNumber(Room.roomMax,Room.currentRoom)}/>
                </S.PointProgress>
                <S.StudyButton onClick={() =>{alert("자습이 신청됐습니다.")}}>자습신청</S.StudyButton>
            </S.StudyContent>
        </S.Positioner>
    )
}

export default Selfstudyboard
