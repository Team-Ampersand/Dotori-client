import React, { useCallback, useState, useEffect } from "react";
import * as S from "./Style";

interface LaptopSeatProps {
  id: number;
  roomName: string;
}

const LaptopSeat: React.FC<LaptopSeatProps> = ({ id, roomName }) => {
  
  const onClickRoomSeat = useCallback(() => {
    //addPopup({ title: "노트북 대여 신청", element: <><strong>{roomName}실, {id+1}번 좌석</strong>에 노트북 대여를 신청할까요?</>, withoutClose: true, confirmAction: () => alert("대여 신청에 성공하였습니다!") });
  }, [id, roomName])

  return (
    <S.Postioner id={`${id + 1}`} onClick={onClickRoomSeat}>
      <span>{id + 1}</span>
    </S.Postioner>
  );
};

export default LaptopSeat;
