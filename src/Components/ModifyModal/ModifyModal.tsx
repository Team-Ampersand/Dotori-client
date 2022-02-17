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
    });
  }, []);

  useEffect(() => {
    window.history.pushState({ page: "modal" }, document.title);
    window.addEventListener("popstate", closeModifyModal);
  });

  const onCancle = () => {
    closeModifyModal();
  };

  // const onRemove = (id) => {
  //   if (window.confirm("정말 삭제하시겠습니까 ?")) {
  //     setModifyList(modifyList.filter((item) => item.id !== id));
  //   }
  // }
  return modalState ? (
    <>
      <S.Positioner>
        <S.Overlay onClick={closeModifyModal} />
        <S.Container>
          <ModifyList modifyList={modifyList} role={role} />
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
