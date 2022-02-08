import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { InfoUpdateModal } from "Components";
import stuInfo from "Api/stuInfo";

interface StuAuthorityItemProps {
  stuId: number;
  stuNum: string;
  name: string;
  authority: string;
  selfStudy: string;
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

const returnSelfStudyValue = (selfStudy: string) => {
  switch (selfStudy) {
    case "CAN":
      return "신청 가능";
    case "APPLIED":
      return "신청됨";
    case "CANT":
      return "신청 취소";
    case "IMPOSSIBLE":
      return "신청 불가";
    default:
      return "";
  }
};

const StuAuthorityItem: React.FC<StuAuthorityItemProps> = ({
  stuId,
  stuNum,
  name,
  authority,
  selfStudy,
}) => {
  useEffect(() => {
    if (returnSelfStudyValue(selfStudy) === "신청 불가") {
      setSelfStudyState(false);
    }
  }, []);

  const banSelfStudy = async () => {
    if (window.confirm("자습을 금지하겠습니까 ?")) {
      const role = await localStorage.getItem("role");
      await stuInfo.banSelfStudy(role, stuId);
      window.location.reload();
    } else return;
  };

  const banCancelSelfStudy = async () => {
    if (window.confirm("자습 금지를 취소하시겠습니까 ?")) {
      const role = await localStorage.getItem("role");
      await stuInfo.banCancelSelfStudy(role, stuId);
      window.location.reload();
    } else return;
  };

  const [selfStudyState, setSelfStudyState] = useState<boolean>(true);

  const [editState, setEditState] = useState(false);

  const closeModal = () => {
    setEditState(false);
  };
  return (
    <>
      <S.Container>
        <S.StuInfoWrapper>
          <S.StuNumStyle>{stuNum}</S.StuNumStyle>
          <S.NameStyle onClick={() => console.log(selfStudy)}>
            {name}
          </S.NameStyle>
          <S.AuthorityStyle>{returnRoleValue(authority)}</S.AuthorityStyle>
          <S.SelfStudyStyle>{returnSelfStudyValue(selfStudy)}</S.SelfStudyStyle>
        </S.StuInfoWrapper>
        <S.BtnWrapper>
          {selfStudyState ? (
            <S.BanBtn onClick={banSelfStudy}>자습 금지</S.BanBtn>
          ) : (
            <S.BanCancelBtn onClick={banCancelSelfStudy}>
              금지 취소
            </S.BanCancelBtn>
          )}
          <S.EditBtn onClick={() => setEditState(!editState)}>
            정보 수정
          </S.EditBtn>
        </S.BtnWrapper>
        <InfoUpdateModal
          modalState={editState}
          closeModal={closeModal}
          stuNum={stuNum}
          name={name}
          role={returnRoleValue(authority)}
          stuId={stuId}
        />
      </S.Container>
    </>
  );
};

export default StuAuthorityItem;
