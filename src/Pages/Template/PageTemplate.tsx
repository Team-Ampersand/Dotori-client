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
    case "/laptop":
      return "노트북 대여";
    case '/song':
      return '기상음악';
    default:
      break;
  }
};

const returnValueType = (nowUrl: string) => {
  switch (nowUrl) {
    case "/laptop":
      return "laptop";
    case '/song':
      return "song";
    default:
      return 0;
  }
}

const ChangeType = (match: MatchType, isActive: boolean, setIsActive:React.Dispatch<React.SetStateAction<boolean>>) => {
  if (match.path === "/laptop") {
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
  if (!isActive) {
    return (<>
      <S.Banner>
        <BannerPage match={match} />
      </S.Banner>
      <S.Content>{children}</S.Content>
    </>);
  } else if (returnValueType(match.path) === "laptop") {
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
