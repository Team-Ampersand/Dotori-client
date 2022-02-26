import { useEffect, useState } from "react";
import * as S from "./Style";
import penaltyInfo from "../../Api/penaltyInfo";
import ModifyList from "Components/ModifyList/ModifyList";

interface ModalProps {
  modalState: boolean;
  closeModifyModal: () => void;
  stuNum: string;
}

const ModifyModal: React.FC<ModalProps> = ({
  modalState,
  closeModifyModal,
  stuNum
}) => {
  const [modifyList, setModifyList]:any = useState([]);
  const [modifyMessage, setModifyMessage] = useState();

  const getModifyPenaltyInfo = async () => {
    const role = await localStorage.getItem("role");
    return await penaltyInfo.getModifyPenaltyInfo(role, stuNum);
  }

  const [role, setRole] = useState<string | null>("");

  const settingRole = async () => {
    const role = await localStorage.getItem("role");
    setRole(role);
  };

  useEffect(() => {
    settingRole();
    getModifyPenaltyInfo().then((res) => {
      res && setModifyList(res.data.data);
      res && setModifyMessage(res.data.message);
    });
  }, []);

  useEffect(() => {
    window.history.pushState({ page: "modal" }, document.title);
    window.addEventListener("popstate", closeModifyModal);
  });

  const onCancle = () => {
    closeModifyModal();
  };

  return modalState ? (
    <>
      <S.Positioner>
        <S.Overlay onClick={closeModifyModal} />
        <S.Container>
          <ModifyList modifyList={modifyMessage === "규정위반 내역이 없습니다" ? [modifyMessage] : modifyList} role={role} />
          <S.BtnWrapper>
            <S.CompleteBtn onClick={onCancle}>확인</S.CompleteBtn>
          </S.BtnWrapper>
        </S.Container>
      </S.Positioner>
    </>
  ) : (
    <></>
  );
};

export default ModifyModal;
