import React, { useCallback } from "react";
import * as S from "./Style";
import { MatchType } from "../../../Utils/GlobalType";
import { LaptopHeader } from "../Header/model/CombineAdminHeader";

type User = {
  name: string;
  grade: number;
  class: number;
  num: number;
  laptopRoom: string;
  seat: number;
  status: boolean;
  bringTime: string;
};

interface ListProps {
  userObj: User[];
  match: MatchType;
}

const onlyCompareThisHeader = (match: MatchType) => {
  switch (match.path) {
    case "/selfstudy":
      return LaptopHeader;
    default:
      break;
  }
};


const List: React.FC<ListProps> = ({ userObj, match }) => {

  const ProhibitLaptopDetected = useCallback((roomName, id, name, status) => {
    if (status) {
      console.log("hello")
      //addPopup({ title: "노트북 부정 사용 적발", element: <><strong>{roomName}실, {id+1}번 좌석</strong>에서 이용중인 <strong>{name} 학생</strong>의 부정사용을 적발했나요?</>, withoutClose: true, confirmAction: () => alert("사감선생님 검토 후 해당 학생의 노트북 대여가 일주일 간 금지됩니다.") });
    } else {
      console.log("bye")
      //addPopup({ title: "노트북 부정 사용 적발 취소", element: <><strong>{roomName}실, {id+1}번 좌석</strong>에서 이용중인 <strong>{name} 학생</strong>의 부정사용을 적발을 취소할까요?</>, withoutClose: true, confirmAction: () => alert("적발이 취소되었습니다!") });
    }
  }, [userObj])

  const mappingUserList = (userObj: User[], match: MatchType) =>
    userObj.map((item, ix) => (
      <S.Wrapper key={`${ix}`}>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[0].flex }}>
          {item.name}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[1].flex }}>
          {item.grade}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[2].flex }}>
          {item.class}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[3].flex }}>
          {item.num}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[4].flex }}>
          {item.laptopRoom}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[5].flex }}>
          {item.seat}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[6].flex }}>
          <S.StatusWrapper status={item.status}>
            <span>{item.status ? "이용가능" : "적발"}</span>
          </S.StatusWrapper>
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[7].flex }}>
          {item.bringTime}
        </div>
        <div style={{ flex: onlyCompareThisHeader(match)!.list[8].flex }}>
          <S.DetectedLaptop
            status={item.status}
            onClick={() => ProhibitLaptopDetected(item.laptopRoom, item.seat, item.name, item.status)}
          >
            <span>{item.status ? "적발신고" : "적발"}</span>
          </S.DetectedLaptop>
        </div>
      </S.Wrapper>
    ));

  return <>{mappingUserList(userObj, match)}</>;
};

export default List;
