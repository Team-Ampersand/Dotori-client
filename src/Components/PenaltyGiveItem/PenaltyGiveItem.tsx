import React, { useState } from "react";
import * as S from "./Style";
import GiveModal from "Components/PenaltyGiveModal/PenaltyGiveModal";

interface PenaltyGiveItemProps {
  stuNum:Array<string>
  checked: Array<string>
}

const PenaltyGiveItem: React.FC<PenaltyGiveItemProps> = ({ stuNum, checked }) => {
  const [editState, setEditState] = useState(false);

  const GiveItemModal = () => {
    if(checked.length === 0){
      alert("규정을 위반한 학생을 체크해주세요.");
      return;
    }
    setEditState(!editState)
  }

  const closeModal = () => {
    setEditState(false);
  };
  return(
    <>
      <S.BreakDownBtn onClick={GiveItemModal}>규정위반 기록하기</S.BreakDownBtn>
      <GiveModal
        modalState={editState}
        closeModal={closeModal}
        stuNum={stuNum}
      />
    </>
  )
}

export default PenaltyGiveItem;
