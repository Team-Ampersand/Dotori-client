import notice from "Api/notice";
import React, { useEffect, useState } from "react";
import * as S from "./Style";

interface ModalProps {
  board_key: number;
  modalState: boolean;
  closeModal: (e: any) => void;
  authorColor: string;
  updateState: boolean;
  setUpdateState: (e: any) => void;
}

const Modal: React.FC<ModalProps> = ({
  board_key,
  modalState,
  closeModal,
  authorColor,
  updateState,
  setUpdateState,
}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const getNoticeItem = (boardId) => {
    return notice.adminGetNoticeItem(boardId);
  };

  useEffect(() => {
    getNoticeItem(board_key)
      .then((res) => res.data.data)
      .then((res) => {
        setTitle(res.title);
        setContent(res.content);
        setUpdateTitle(res.title);
        setUpdateContent(res.content);
      });
  }, []);

  const [updateTitle, setUpdateTitle] = useState<string>("");
  const [updateContent, setUpdateContent] = useState<string>("");

  const onUpdate = async (e) => {
    await notice.adminUpdateNotice(board_key, updateTitle, updateContent);
    closeModal(e);
    setUpdateState(false);
    window.location.reload();
  };

  const updateClose = (e) => {
    if (window.confirm("변경사항이 저장되지 않을 수 있습니다.")) {
      closeModal(e);
    }
  };

  return modalState ? (
    <div>
      <S.Positioner>
        {updateState ? (
          <S.Overlay onClick={updateClose} />
        ) : (
          <S.Overlay onClick={(e) => closeModal(e)} />
        )}
        <S.Container>
          <S.Title authorColor={authorColor}>
            {updateState ? (
              <>
                <input
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <S.Close onClick={updateClose}>X</S.Close>
              </>
            ) : (
              <>
                {title}
                <S.Close onClick={(e) => closeModal(e)}>X</S.Close>
              </>
            )}
          </S.Title>
          <S.Content>
            {updateState ? (
              <>
                <textarea
                  value={updateContent}
                  onChange={(e) => setUpdateContent(e.target.value)}
                />
              </>
            ) : (
              <>
                {content?.split("\n").map((line) => (
                  <p>{line}</p>
                ))}
              </>
            )}
          </S.Content>
          {updateState ? (
            <>
              <S.BtnWrapper color={authorColor}>
                <S.Btn color={authorColor} onClick={onUpdate}>
                  수정
                </S.Btn>
              </S.BtnWrapper>
            </>
          ) : (
            <></>
          )}
        </S.Container>
      </S.Positioner>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
