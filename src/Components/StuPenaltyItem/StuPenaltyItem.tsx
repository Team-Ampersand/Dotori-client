import React, { useState } from "react";
import * as S from "./Style";
import PenaltyModal from "../PenaltyModal/PenaltyModal";
import ModifyModal from "Components/ModifyModal/ModifyModal";

interface StuAuthorityItemProps {
  stuNum: string;
  name: string;
}

const StuAuthorityItem: React.FC<StuAuthorityItemProps> = ({
  stuNum,
  name,
}) => {
  const [editPenaltyState, setEditPenaltyState] = useState(false);
  const [editModifyState, setEditModifyState] = useState(false);

  const closePenaltyModal = () => {
    setEditPenaltyState(false);
  };

  const closeModifyModal = () => {
    setEditModifyState(false);
  }

  return (
    <>
      <S.Container>
        <S.StuInfoWrapper>
          <S.StuNumStyle>{stuNum}</S.StuNumStyle>
          <S.NameStyle>{name}</S.NameStyle>
        </S.StuInfoWrapper>
        <S.BtnWrapper>
          <S.EditModifyBtn onClick={() => setEditModifyState(!editModifyState)}>수정</S.EditModifyBtn>
            {editModifyState && 
            <ModifyModal 
            modalState={editModifyState}
            closeModifyModal={closeModifyModal}
            stuNum={stuNum}
          />
            }
          <S.EditBtn onClick={() => setEditPenaltyState(!editPenaltyState)}>확인</S.EditBtn>
            {editPenaltyState &&
            <PenaltyModal
            modalState={editPenaltyState}
            closePenaltyModal={closePenaltyModal}
            stuNum={stuNum}
          />
          }
        </S.BtnWrapper>
      </S.Container>
    </>
  );
};

export default StuAuthorityItem;
