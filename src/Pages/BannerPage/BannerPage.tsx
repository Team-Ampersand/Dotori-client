import React from "react";
import * as S from "./Style";
import { BetaBanner } from "../../Components";
import { MatchType } from "../../Utils/GlobalType";

interface BannerProps {
  match: MatchType;
}

const CompareBanner = (nowUrl: string) => {
  switch (nowUrl) {
    case "/song":
      return;
    case "/notice":
      return;
    case "/notice/write":
      return;
    case "/selfstudy":
      return;
    case "/point":
      return;
    case "/authorization":
      return;
    default:
      return (
        <S.Postioner>
          <BetaBanner />
        </S.Postioner>
      );
  }
};

const BannerContainer: React.FC<BannerProps> = ({ match }) => {
  return <>{CompareBanner(match.path)}</>;
};

export default BannerContainer;
