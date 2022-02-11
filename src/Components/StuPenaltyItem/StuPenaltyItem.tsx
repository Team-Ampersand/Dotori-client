import React, { useState } from "react";
import * as S from "./Style";
import PenaltyModal from "../PenaltyModal/PenaltyModal";

interface StuAuthorityItemProps {
  stuId: number;
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
  stuId,
  stuNum,
  name,
  authority,
}) => {
  const [editState, setEditState] = useState(false);

  // const onConfirm = () => {
  //   setEditState(!editState);
  // };

  const closeModal = () => {
    setEditState(false);
  };
  return (
    <>
      <S.Container>
        <S.StuInfoWrapper>
          <S.CheckBox type="checkbox"/>
          <S.StuNumStyle>{stuNum}</S.StuNumStyle>
          <S.NameStyle>{name}</S.NameStyle>
          <S.AuthorityStyle>{returnRoleValue(authority)}</S.AuthorityStyle>
        </S.StuInfoWrapper>
        <S.EditBtn onClick={() => setEditState(!editState)}>규정위반내역 확인하기</S.EditBtn>
        <PenaltyModal
          modalState={editState}
          closeModal={closeModal}
          stuNum={stuNum}
          role={returnRoleValue(authority)}
        />
      </S.Container>
    </>
  );
};

export default StuAuthorityItem;
