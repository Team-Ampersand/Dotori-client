import React from "react";
import { LaptopSeat } from '../../Components'
import * as S from "./Style";

interface LaptopSeatsProps {
  roomId?: string;
}

const dmy = [
    {},
]

const LaptopSeats: React.FC<LaptopSeatsProps> = ({ roomId }) => {
  console.log(roomId);
  return (
    <S.Postioner>
      <S.Header>
        <div className="LeftHeader">
          <h2>좌석 선택</h2>
          <span>{roomId}</span>
        </div>
        <div className="RightHeader">
            <div className="label">
                <div className="notUsed"/>
                <span>이용불가</span>
            </div>
            <div className="label">
                <div className="useAble"/>
                <span>이용가능</span>
            </div>
            <div className="label">
                <div className="selected"/>
                <span>선택됨</span>
            </div>
        </div>
      </S.Header>
      <S.GridWrapper>
        <S.GridContent>
           {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},].map((item, ix) => <LaptopSeat id={ix} roomName={roomId!} />)}
        </S.GridContent>
      </S.GridWrapper>
    </S.Postioner>
  );
};

export default LaptopSeats;
