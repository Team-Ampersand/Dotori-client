import React from 'react';
import * as S from "./Style";

interface ModalProps {
    modalState: boolean;
    closeModal: () => void;
    // stuNum: string;
  }

const GiveModal: React.FC<ModalProps> = ({
    modalState,
    closeModal,
    // stuNum,
}) => {
    const onCancle = () => {
        closeModal();
      };
    
      return modalState ? (
        <>
          <S.Positioner>
            <S.Overlay onClick={closeModal} />
            <S.Container>
              <S.BtnWrapper>
                <S.CompleteBtn onClick={onCancle}>확인</S.CompleteBtn>
              </S.BtnWrapper>
            </S.Container>
          </S.Positioner>
        </>
      ) : (
        <></>
    );
}

export default GiveModal;