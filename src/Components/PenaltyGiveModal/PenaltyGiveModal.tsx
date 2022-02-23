/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import * as S from "./Style";
import penaltyInfo from "Api/penaltyInfo";

interface ModalProps {
  modalState: boolean;
  closeModal: () => void;
  stuNum: Array<string>;
}


const GiveModal: React.FC<ModalProps> = ({
    modalState,
    closeModal,
    stuNum,
}) => {
  const [givePenalty, setGivePenalty] = useState("");

  const givePenaltyUpdate = async () => {
    await penaltyInfo.updatePenaltyInfo(date, givePenalty, stuNum);
    alert("규정위반 내역을 추가하였습니다.")
  }

  const [date, setDate]= useState(new Date().toISOString().slice(0, 10));

  const onComplete = () => {
    if (date === "") {
      alert("날짜를 설정해주세요!");
      return;
    }else if (givePenalty === ""){
      alert("규정위반 내역을 설정해주세요!");
      return;
    }
    givePenaltyUpdate();
    closeModal();
    window.location.reload();
  }


  return modalState ? (
    <>
      <S.Positioner>
        <S.Overlay onClick={closeModal} />
          <S.Container>
            <S.PenaltyGiveContainer>
              <S.DateWrapper>
                  <S.Date 
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={new Date().toISOString().slice(0, 10)}
                    required
                  />
              </S.DateWrapper>
              <S.List>
                <S.PenaltySelect
                  onChange={(e) => {
                    setGivePenalty(e.target.value);
                  }}
                >
                  <option value="" selected disabled hidden>
                    선택
                  </option>
                  <option value="FIREARMS">화기류</option>
                  <option value="WEAPON">흉기</option>
                  <option value="ALCOHOL">주류</option>
                  <option value="TOBACCO">담배</option>
                  <option value="MEANDERING_APPARATUS">사행성기구</option>
                  <option value="FOOD">음식</option>
                  <option value="MANAGER_GUIDANCE">사감의 학습 및 생활지도 불이행</option>
                  <option value="TIME">지각</option>
                  <option value="OUTING">외출</option>
                  <option value="OVERNIGHT_STAY">외박</option>
                  <option value="DAMAGE_OF_GOODS">물품훼손</option>
                  <option value="THEFT">절도</option>
                  <option value="CHANTAGE">갈취</option>
                  <option value="DISTURBING_SLEEP">타호실 출입</option>
                  <option value="ELECTRONIC_DEVICE">전자기기 소지</option>
                  <option value="LOUD">고성방가</option>
                  <option value="INCORRECT_ENTRY">지정시간 외 기숙사 출입</option>
                  <option value="LAUNDRY">세탁물 방치</option>
                  <option value="VIOLATION_OF_THE_USE_OF_FACILITIES">공공시설물 사용규정 위반</option>
                  <option value="DAMAGE_OF_POST">부착된 게시물 훼손</option>
                  <option value="POSSESSION_OF_ELECTRONICS_DEVICES">전자기기 소지 혹은 사용</option>
                  <option value="CLEAN_COUNDITION_BAD">호실 정리정돈 상태 불량</option>
                  <option value="ENVIRONMENT_POLLUTION">기숙사 환경 오염</option>
                  <option value="AFFECTIONATE_ACT">애정 행위</option>
                  <option value="SEXUAL_ACT">성적 행위</option>
                  <option value="ENTRY_TO_PROHIBITED_AREAS">출입 금지 구역 출입</option>
                  <option value="VIOLATION_OF_STUDY_ROOM_RULES">학습실 면학분위기 저해</option>
                  <option value="OUTSIDER_ENTRY">외부인 출입 허가</option>
                </S.PenaltySelect>
              </S.List>
              <S.BtnWrapper>
                <S.GiveBtn onClick={onComplete}>부여하기</S.GiveBtn>
              </S.BtnWrapper>
            </S.PenaltyGiveContainer>
          </S.Container>
        </S.Positioner>
      </>
    ) : (
    <></>
  );
}

export default GiveModal;