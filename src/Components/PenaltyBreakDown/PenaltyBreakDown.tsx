/* eslint-disable no-duplicate-case */
/* eslint-disable no-sequences */
import React from 'react';
import * as S from "./Style";
import LCategories from "./LargeCategories";

interface PenaltyBreakDownProps {
  penaltyList: any,
}

const items = LCategories.map(item => {
  return(
    <S.LargeCategories>
      <S.TextWrapper>
        {item.name}
      </S.TextWrapper>
  </S.LargeCategories>
  )
})

const PenaltyBreakDown:React.FC<PenaltyBreakDownProps> = ({ penaltyList }) => {
  const ViolationHistoryList = [penaltyList] && [penaltyList].map((item) => {
    return(
      <>
        <S.LargeCategoriesWrapper>
          {items}
        </S.LargeCategoriesWrapper>
        <S.SmallCategoriesWrapper>
          {item.FIREARMS.cnt > 0 ? <S.SmallCategories>화기류 {item.FIREARMS.cnt}회 <S.DateWrapper>{item.FIREARMS.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.WEAPON.cnt > 0 ? <S.SmallCategories>흉기 {item.WEAPON.cnt}회 <S.DateWrapper>{item.WEAPON.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.ALCOHOL.cnt > 0 ? <S.SmallCategories>주류 {item.ALCOHOL.cnt}회 <S.DateWrapper>{item.ALCOHOL.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.TOBACCO.cnt > 0 ? <S.SmallCategories>담배 {item.TOBACCO.cnt}회 <S.DateWrapper>{item.TOBACCO.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.MEANDERING_APPARATUS.cnt > 0 ? <S.SmallCategories>사행성기구 {item.MEANDERING_APPARATUS.cnt}회 <S.DateWrapper>{item.MEANDERING_APPARATUS.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.FOOD.cnt > 0 ? <S.SmallCategories>음식 {item.FOOD.cnt}회 <S.DateWrapper>{item.FOOD.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.MANAGER_GUIDANCE.cnt > 0 ? <S.SmallCategories>사감의 학습 및 생활지도 불이행 {item.MANAGER_GUIDANCE.cnt}회 <S.DateWrapper>{item.MANAGER_GUIDANCE.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.TIME.cnt > 0 ? <S.SmallCategories>지각 {item.TIME.cnt}회 <S.DateWrapper>{item.TIME.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.OUTING.cnt > 0 ? <S.SmallCategories>외출 {item.OUTING.cnt}회 <S.DateWrapper>{item.OUTING.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.OVERNIGHT_STAY.cnt > 0 ? <S.SmallCategories>외박 {item.OVERNIGHT_STAY.cnt}회 <S.DateWrapper>{item.OVERNIGHT_STAY.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.DAMAGE_OF_GOODS.cnt > 0 ? <S.SmallCategories>물품훼손 {item.DAMAGE_OF_GOODS.cnt}회 <S.DateWrapper>{item.DAMAGE_OF_GOODS.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.THEFT.cnt > 0 ? <S.SmallCategories>절도 {item.THEFT.cnt}회 <S.DateWrapper>{item.THEFT.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.CHANTAGE.cnt > 0 ? <S.SmallCategories>갈취 {item.CHANTAGE.cnt}회 <S.DateWrapper>{item.CHANTAGE.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.DISTURBING_SLEEP.cnt > 0 ? <S.SmallCategories>타호실 출입 {item.DISTURBING_SLEEP.cnt}회 <S.DateWrapper>{item.DISTURBING_SLEEP.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.ELECTRONIC_DEVICE.cnt > 0 ? <S.SmallCategories>전자기기 소지 {item.ELECTRONIC_DEVICE.cnt}회 <S.DateWrapper>{item.ELECTRONIC_DEVICE.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.LOUD.cnt > 0 ? <S.SmallCategories>고성방가 {item.LOUD.cnt}회 <S.DateWrapper>{item.LOUD.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.INCORRECT_ENTRY.cnt > 0 ? <S.SmallCategories>지정시간 외 기숙사 출입 {item.INCORRECT_ENTRY.cnt}회 <S.DateWrapper>{item.INCORRECT_ENTRY.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.LAUNDRY.cnt > 0 ? <S.SmallCategories>세탁물 방치 {item.LAUNDRY.cnt}회 <S.DateWrapper>{item.LAUNDRY.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.VIOLATION_OF_THE_USE_OF_FACILITIES.cnt > 0 ? <S.SmallCategories>공공시설물 사용규정 위반 {item.VIOLATION_OF_THE_USE_OF_FACILITIES.cnt}회 <S.DateWrapper>{item.VIOLATION_OF_THE_USE_OF_FACILITIES.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.DAMAGE_OF_POST.cnt > 0 ? <S.SmallCategories>부착된 게시물 훼손 {item.DAMAGE_OF_POST.cnt}회 <S.DateWrapper>{item.DAMAGE_OF_POST.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.POSSESSION_OF_ELECTRONICS_DEVICES.cnt > 0 ? <S.SmallCategories>전자기기 소지 혹은 사용 {item.POSSESSION_OF_ELECTRONICS_DEVICES.cnt}회 <S.DateWrapper>{item.POSSESSION_OF_ELECTRONICS_DEVICES.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.CLEAN_COUNDITION_BAD.cnt > 0 ? <S.SmallCategories>호실 정리정돈 상태 불량 {item.CLEAN_COUNDITION_BAD.cnt}회 <S.DateWrapper>{item.CLEAN_COUNDITION_BAD.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.ENVIRONMENT_POLLUTION.cnt > 0 ? <S.SmallCategories>기숙사 환경 오염 {item.ENVIRONMENT_POLLUTION.cnt}회 <S.DateWrapper>{item.ENVIRONMENT_POLLUTION.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.AFFECTIONATE_ACT.cnt > 0 ? <S.SmallCategories>애정 행위 {item.AFFECTIONATE_ACT.cnt}회 <S.DateWrapper>{item.AFFECTIONATE_ACT.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.SEXUAL_ACT.cnt > 0 ? <S.SmallCategories>성적 행위 {item.SEXUAL_ACT.cnt}회 <S.DateWrapper>{item.SEXUAL_ACT.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.ENTRY_TO_PROHIBITED_AREAS.cnt > 0 ? <S.SmallCategories>출입금지 구역 출입 {item.ENTRY_TO_PROHIBITED_AREAS.cnt}회 <S.DateWrapper>{item.ENTRY_TO_PROHIBITED_AREAS.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.VIOLATION_OF_STUDY_ROOM_RULES.cnt > 0 ? <S.SmallCategories>학습실 면학분위기 저해 {item.VIOLATION_OF_STUDY_ROOM_RULES.cnt}회 <S.DateWrapper>{item.VIOLATION_OF_STUDY_ROOM_RULES.date.join("\n")}</S.DateWrapper></S.SmallCategories> : null}
          {item.OUTSIDER_ENTRY.cnt > 0 ? <S.SmallCategories>외부인 출입 허가 {item.OUTSIDER_ENTRY.cnt}회 <S.DateWrapper>{item.OUTSIDER_ENTRY.date}</S.DateWrapper></S.SmallCategories> : null}
          {item.FIREARMS.cnt <= 0 && item.WEAPON.cnt <= 0 && item.ALCOHOL.cnt <= 0 && item.MEANDERING_APPARATUS.cnt <= 0 && item.FOOD.cnt <= 0 && item.MANAGER_GUIDANCE.cnt <= 0 && item.TIME.cnt <= 0 && item.OUTING.cnt <= 0 && item.OVERNIGHT_STAY.cnt <= 0 && item.DAMAGE_OF_GOODS.cnt <= 0 && item.THEFT.cnt <= 0 && item.CHANTAGE.cnt <= 0 && item.DISTURBING_SLEEP.cnt <= 0 && item.ELECTRONIC_DEVICE.cnt <= 0 && item.LOUD.cnt <= 0 && item.INCORRECT_ENTRY.cnt <= 0 && item.LAUNDRY.cnt <= 0 && item.VIOLATION_OF_THE_USE_OF_FACILITIES.cnt <= 0 && item.DAMAGE_OF_POST.cnt <= 0 && item.POSSESSION_OF_ELECTRONICS_DEVICES.cnt <= 0 && item.CLEAN_COUNDITION_BAD.cnt <= 0 && item.ENVIRONMENT_POLLUTION.cnt <= 0 && item.AFFECTIONATE_ACT.cnt <= 0 && item.SEXUAL_ACT.cnt <= 0 && item.ENTRY_TO_PROHIBITED_AREAS.cnt <= 0 && item.VIOLATION_OF_STUDY_ROOM_RULES.cnt <= 0 && item.OUTSIDER_ENTRY.cnt <= 0
          ? <S.SmallCategories>이 학생은 규정위반 내역이 없습니다.</S.SmallCategories> : null}
        </S.SmallCategoriesWrapper>
      </>
    )
  });
  return(
    <S.BreakDownContainer>
      <S.BreakDownWrapper>
        <S.Header>규정위반내역</S.Header>
        <S.Category>
          {ViolationHistoryList}
        </S.Category>
      </S.BreakDownWrapper>
    </S.BreakDownContainer>
  )
};

export default PenaltyBreakDown;