import { useEffect, useState } from "react";
import * as S from "./Style";
import penaltyInfo from "../../Api/penaltyInfo";
import PenaltyBreakDown from "Components/PenaltyBreakDown/PenaltyBreakDown";

interface ModalProps {
  modalState: boolean;
  closePenaltyModal: () => void;
  stuNum: string;
}

const PenaltyModal: React.FC<ModalProps> = ({
  modalState,
	closePenaltyModal,
	stuNum,
}) => {
	const [penaltyList, setPenaltyList] = useState();

  const getPenaltyInfo = async () => {
    const role = await localStorage.getItem("role");
    return await penaltyInfo.getPenaltyInfo(role, stuNum);
  }

  useEffect(() => {
      getPenaltyInfo().then((res) => {
        res && setPenaltyList(res.data.data);
      });
  }, []);

  useEffect(() => {
    window.history.pushState({ page: "modal" }, document.title);
    window.addEventListener("popstate", closePenaltyModal);
  });

  const onCancle = () => {
    closePenaltyModal();
  };

  return modalState ? (
    <>
      <S.Positioner>
        <S.Overlay onClick={closePenaltyModal} />
        <S.Container>
					<PenaltyBreakDown
            penaltyList={penaltyList}
					/>
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
