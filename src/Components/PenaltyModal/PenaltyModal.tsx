import { useEffect, useState } from "react";
import * as S from "./Style";
import penaltyInfo from "../../Api/penaltyInfo";
import PenaltyBreakDown from "Components/PenaltyBreakDown/PenaltyBreakDown";

interface ModalProps {
  modalState: boolean;
  closeModal: () => void;
  stuNum: string;
  role: string;
}

const PenaltyModal: React.FC<ModalProps> = ({
  modalState,
	closeModal,
	stuNum,
}) => {
	const [penaltyList, setPenaltyList] = useState([]);

  const getPenaltyInfo = async () => {
    const role = await localStorage.getItem("role");
    return await penaltyInfo.getPenaltyInfo(role, stuNum);
  }

  useEffect(() => {
      getPenaltyInfo().then((res) => {
        console.log(res?.data);
        res && setPenaltyList(res.data);
      });
  }, []);

  useEffect(() => {
    window.history.pushState({ page: "modal" }, document.title);
    window.addEventListener("popstate", closeModal);
  });

  const onCancle = () => {
    closeModal();
  };

  return modalState ? (
    <>
      <S.Positioner>
        <S.Overlay onClick={closeModal} />
        <S.Container>
          <PenaltyBreakDown/>
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

export default PenaltyModal;
