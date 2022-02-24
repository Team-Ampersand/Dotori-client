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
          return "전자기기 소지 혹은 사용";
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
        <>
        {all ? item[1] === "규" ? <S.None>규정위반 내역이 없습니다.</S.None> : null : null}
        {all ? item[1].cnt > 0 ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {ban ? item[0] === "FIREARMS" || item[0] === "WEAPON" || item[0] === "ALCOHOL" || item[0] === "TOBACCO" || item[0] === "MEANDERING_APPARATUS" || item[0] === "FOOD" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {unfulfill ? item[0] === "MANAGER_GUIDANCE" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {time ? item[0] === "TIME" || item[0] === "OUTING" || item[0] === "OVERNIGHT_STAY" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {damage ? item[0] === "DAMAGE_OF_GOODS" || item[0] === "THEFT" || item[0] === "CHANTAGE" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {sleep ? item[0] === "DISTURBING_SLEEP" || item[0] === "ELECTRONIC_DEVICE" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {hygiene ? item[0] === "LOUD" || item[0] === "INCOREECT_ENTRY" || item[0] === "LAUNDRY" || item[0] === "VIOLATION_OF_THE_USE_OF_FACILITIES" || item[0] === "DAMAGE_OF_POST" || item[0] === "POSSESSION_OF_ELECTRONICS_DEVICES" || item[0] === "CLEAN_COUNDITION_BAD" || item[0] === "ENVIRONMENT_POLLUTION" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {affection ? item[0] === "AFFECTIONATE_ACT" || item[0] === "SEXUAL_ACT" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {entry ? item[0] === "ENTRY_TO_PROHIBITED_AREAS" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {learn ? item[0] === "VIOLATION_OF_STUDY_ROOM_RULES" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        {outside ? item[0] === "OUTSIDER_ENTRY" ? <S.SmallCategories><S.NameWrapper>{returnPenaltyValue(item[0])}</S.NameWrapper><S.CntWrapper>{item[1].cnt}회</S.CntWrapper><S.DateWrapper onClick={handleMoreBtn} className={closed ? "" : "close"}>{item[1].date.join("\n")}</S.DateWrapper></S.SmallCategories> : null : null}
        </>
      )
    })
    
    return(
      <>
        <S.LargeCategoriesWrapper>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={all === true} onClick={() => {setAll(true); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              전체
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={ban === true} onClick={() => {setBan(true); setAll(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              금지 물품 반입
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={unfulfill === true} onClick={() => {setUnfulfill(true); setAll(false); setBan(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              사감 지도 불이행
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={time === true} onClick={() => {setTime(true); setAll(false); setBan(false); setUnfulfill(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              시간 관 소홀 및 이탈 행위
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={damage === true} onClick={() => {setDamage(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              물품 훼손 및 절도
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={sleep === true} onClick={() => {setSleep(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              취침 방해
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={hygiene === true} onClick={() => {setHygiene(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setAffection(false); setEntry(false); setLearn(false); setOutside(false);}}>
              공동 생활 방해 및 위생 상태 불량
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={affection === true} onClick={() => {setAffection(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setEntry(false); setLearn(false); setOutside(false);}}>
              애정 행위
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={entry === true} onClick={() => {setEntry(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setLearn(false); setOutside(false);}}>
              기숙사 출입 금지 구역 출입
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={learn === true} onClick={() => {setLearn(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setOutside(false);}}>
              학습실 면학분위기 저해
            </S.TextWrapper>
          </S.LargeCategories>
          <S.LargeCategories>
            <S.TextWrapper isPenalty={outside === true} onClick={() => {setOutside(true); setAll(false); setBan(false); setUnfulfill(false); setTime(false); setDamage(false); setSleep(false); setHygiene(false); setAffection(false); setEntry(false); setLearn(false);}}>
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