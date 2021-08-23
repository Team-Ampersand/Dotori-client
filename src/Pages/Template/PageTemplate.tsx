import React, { useState } from "react";
import * as S from "./Style";
import BannerPage from "../BannerPage/BannerPage";
import { MatchType } from "../../Utils/GlobalType";
import { ManufactureDate } from "../../Utils/ManufactureDate";
import { ChangeLaptopType, ChangeSongType } from "../../Components";
import { AdminLaptopListPage, AdminSongListPage } from "../";

interface TemplateProps {
  match: MatchType;
}

const returnPageType = (routerName: string) => {
  switch (routerName) {
    case "/":
      return "홈";
    case "/selfstudy":
      return "자습신청";
    case '/song':
      return '기상음악';
    case '/notice':
      return '공지사항';
    default:
      break;
  }
};

const returnValueType = (nowUrl: string) => {
  switch (nowUrl) {
    case "/selfstudy":
      return "selfstudy";
    case '/song':
      return "song";
    case '/notice':
      return "notice"; 
    default:
      return 0;
  }
}

const ChangeType = (match: MatchType, isActive: boolean, setIsActive:React.Dispatch<React.SetStateAction<boolean>>) => {
  if (match.path === "/selfstudy") {
    return <ChangeLaptopType
      active={isActive}
      setActive={(value: boolean) => setIsActive(value)}
    />;
  } else if (match.path === "/song") {
    return <ChangeSongType
      active={isActive}
      setActive={(value: boolean) => setIsActive(value)}
    />;
  }
}

const BannerStatus = (match: MatchType, children: React.ReactNode, isActive: boolean) => {
  if (returnValueType(match.path) === "notice") {
    return (
      <>
        <BannerPage match={match} />
        <S.Content>{children}</S.Content>
      </>)
    ;
  } else if (!isActive) {
    return (<>
      <S.Banner>
        <BannerPage match={match} />
      </S.Banner>
      <S.Content>{children}</S.Content>
    </>);
  } else if (returnValueType(match.path) === "selfstudy") {
    return (<AdminLaptopListPage match={match} />);
  } else if (returnValueType(match.path) === "song") {
    return (<AdminSongListPage match={match} />);
  }
}

const PageTemplate: React.FC<TemplateProps> = ({ match, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Postioner>
      <S.Wrapper>
        <S.Title>
          {returnPageType(match.path)}
          <strong>
            {ManufactureDate("Y")}년 {ManufactureDate("M")}월{" "}
            {ManufactureDate("D")}일 {ManufactureDate("W")}요일
          </strong>
          {ChangeType(match, isActive, setIsActive)}
        </S.Title>
        {BannerStatus(match, children, isActive)}
      </S.Wrapper>
    </S.Postioner>
  );
};

export default PageTemplate;
