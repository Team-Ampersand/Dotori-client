import React, { useState } from 'react';
import * as S from "./Style";

interface PenaltyBreakDownProps {
  penaltyList: any,
}


const PenaltyBreakDown:React.FC<PenaltyBreakDownProps> = ({ penaltyList }) => {
  const [closed, setClosed] = useState(false);
  const handleMoreBtn =  () => {
    setClosed(!closed);
  }

  const [all ,setAll] = useState(true);
  const [ban, setBan] = useState(false);
  const [unfulfill, setUnfulfill] = useState(false);
  const [time, setTime] = useState(false);
  const [damage, setDamage] = useState(false);
  const [sleep, setSleep] = useState(false);
  const [hygiene, setHygiene] = useState(false);
  const [affection, setAffection] = useState(false);
  const [entry, setEntry] = useState(false);
  const [learn, setLearn] = useState(false);
  const [outside, setOutside] = useState(false);

  const ViolationHistoryList = [penaltyList] && [penaltyList].map((item) => { 
    const returnPenaltyValue = (penaltyType: string) => {
      switch (penaltyType) {
        case "FIREARMS":
          return "화기류";
        case "WEAPON":
          return "흉기";
        case "ALCOHOL":
          return "주류";
        case "TOBACCO":
          return "담배";
        case "MEANDERING_APPARATUS":
          return "사행성기구";
        case "FOOD":
          return "음식";
        case "MANAGER_GUIDANCE":
          return "사감의 학습 및 생활지도 불이행";
        case "TIME":
          return "지각"
        case "OUTING":
          return "외출";
        case "OVERNIGHT_STAY":
          return "외박";
        case "DAMAGE_OF_GOODS":
          return "물품훼손";
        case "THEFT":
          return "절도";
        case "CHANTAGE":
          return "갈취";
        case "DISTURBING_SLEEP":
          return "타호실 출입";
        case "ELECTRONIC_DEVICE":
          return "전자기기 소지";
        case "LOUD":
          return "고성방가";
        case "INCORRECT_ENTRY":
          return "지정시간 외 기숙사 출입";
        case "LAUNDRY":
          return "세탁기,건조기에 세탁물 방치";
        case "VIOLATION_OF_THE_USE_OF_FACILITIES":
          return "공공시설물 사용규정 위반";
        case "DAMAGE_OF_POST":
          return "부착된 게시물 훼손 및 낙서";
        case "POSSESSION_OF_ELECTRONICS_DEVICES":
          return "사용 제한 시간 중 전자기기 소지 혹은 사용";
        case "CLEAN_COUNDITION_BAD":
          return "호실 정리정돈 상태 불량";
        case "ENVIRONMENT_POLLUTION":
          return "기숙사 환경 오염";
        case "AFFECTIONATE_ACT":
          return "애정 행위";
        case "SEXUAL_ACT":
          return "성적 행위";
        case "ENTRY_TO_PROHIBITED_AREAS":
          return "출입금지 구역 출입";
        case "VIOLATION_OF_STUDY_ROOM_RULES":
          return "학습실 면학분위기 저해";
        case "OUTSIDER_ENTRY":
          return "외부인 출입 허가";
        default:
          return "";
        }
      };
    const obj = Object.entries(item);
    const SmallCatergories = obj.map((item:any) => {
      return(
        item[1].cnt > 0 ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null
      )
    })
    return(
      <>
        <S.LargeCategoriesWrapper>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setAll(!all); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              전체
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setBan(!ban); setAll(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              금지 물품 반입
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setUnfulfill(!unfulfill); setAll(false); setBan(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              사감 지도 불이행
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setTime(!time); setAll(false); setBan(false); setUnfulfill(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              시간 관 소홀 및 이탈 행위
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setDamage(!damage); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              물품 훼손 및 절도
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setSleep(!sleep); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              취침 방해
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setHygiene(!hygiene); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              공동 생활 방해 및 위생 상태 불량
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setAffection(!affection); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setEntry(false); setLearn(false); setOutside(false);}}>
              애정 행위
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setEntry(!entry); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setLearn(false); setOutside(false);}}>
              기숙사 출입 금지 구역 출입
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setLearn(!learn); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setOutside(false);}}>
              학습실 면학분위기 저해
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper onClick={() => {setOutside(!outside); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false);}}>
              외부인 출입 관여
            </S.TextWrapper>
          </S.LargeCategories>
        </S.LargeCategoriesWrapper>
        <S.SmallCategoriesWrapper>
          {SmallCatergories}
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