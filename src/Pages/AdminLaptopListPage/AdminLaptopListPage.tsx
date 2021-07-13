import React, { useState } from "react";
import * as S from "./Style";
import { ManufactureDate } from "../../Utils/ManufactureDate";
import { LaptopTable } from "../../Components";
import { MatchType } from "../../Utils/GlobalType";

const btnData = [
  {
    name: "전체",
    cnt: 0,
  },
  {
    name: "이용가능",
    cnt: 0,
  },
  {
    name: "적발",
    cnt: 0,
  },
];

interface AdminLaptopListProps {
  match: MatchType;
}

const AdminLaptopListContainer: React.FC<AdminLaptopListProps> = ({ match }) => {
  const [selectId, setSelectId] = useState(0);
  return (
    <S.Postioner>
      <S.Header>
        <div className="left">
          <span>대여대장</span>
          <S.ViewBtnWrapper>
            {btnData.map((item, ix) => (
              <S.SelectUser
                isActive={selectId === ix}
                onClick={() => setSelectId(ix)}
                key={`user-item-${ix}`}
              >
                <span>{item.name}</span>
                <small>{item.cnt}</small>
              </S.SelectUser>
            ))}
          </S.ViewBtnWrapper>
        </div>
        <div className="center">
          <strong>
            {ManufactureDate("Y")}년 {ManufactureDate("M")}월{" "}
            {ManufactureDate("D")}일 {ManufactureDate("W")}요일
          </strong>
        </div>
        <div className="right">
            <span>0개 선택됨</span>
        </div>
      </S.Header>
      <LaptopTable match={match} />
    </S.Postioner>
  );
};

export default AdminLaptopListContainer;
