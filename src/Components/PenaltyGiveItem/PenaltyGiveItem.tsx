import React, { useState } from "react";
import * as S from "./Style";
import GiveModal from "Components/GiveModal/GiveModal";
import { EnumType } from "typescript";

interface PenaltyGiveItemProps {
  stuNum:Array<string>
}

const PenaltyGiveItem: React.FC<PenaltyGiveItemProps> = ({ stuNum }) => {
  const [editState, setEditState] = useState(false);

  const closeModal = () => {
    setEditState(false);
  };
  return(
    <>
      <S.BreakDownBtn onClick={() => setEditState(!editState)}>규정위반 기록하기</S.BreakDownBtn>
      <GiveModal
        modalState={editState}
        closeModal={closeModal}
        stuNum={stuNum}
      />
    </>
  )
}

export default PenaltyGiveItem;
