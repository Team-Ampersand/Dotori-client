import React, { useState } from "react";
import * as S from "./Style";
import PenaltyModal from "../PenaltyModal/PenaltyModal";
import ModifyModal from "Components/ModifyModal/ModifyModal";

interface StuAuthorityItemProps {
  stuNum: string;
  name: string;
  authority: string;
}

const returnRoleValue = (roleType: string) => {
  switch (roleType) {
    case "ROLE_COUNCILLOR":
      return "자치위원회";
    case "ROLE_DEVELOPER":
      return "개발자";
    case "ROLE_MEMBER":
      return "학생";
    default:
      return "";
  }
};

const StuAuthorityItem: React.FC<StuAuthorityItemProps> = ({
  stuNum,
  name,
  authority,
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
          <S.AuthorityStyle>{returnRoleValue(authority)}</S.AuthorityStyle>
        </S.StuInfoWrapper>
        <S.BtnWrapper>
          <S.EditModifyBtn onClick={() => setEditModifyState(!editModifyState)}>규정위반내역 수정하기</S.EditModifyBtn>
          <ModifyModal 
            modalState={editModifyState}
            closeModifyModal={closeModifyModal}
            stuNum={stuNum}
          />
          <S.EditBtn onClick={() => setEditPenaltyState(!editPenaltyState)}>규정위반내역 확인하기</S.EditBtn>
          <PenaltyModal
            modalState={editPenaltyState}
            closePenaltyModal={closePenaltyModal}
            stuNum={stuNum}
          />
        </S.BtnWrapper>
      </S.Container>
    </>
  );
};

export default StuAuthorityItem;
