import React, { useState } from "react";
import * as S from "./Style";
import Modal from "../Modal/Modal";
import notice from "Api/notice";

interface NoticeBoardItemProps {
  board_key: number;
  author: Array<any>;
  title: string;
  createdDate: string;
  editState: boolean;
}

const returnAuthorColor = (authorType: string) => {
  switch (authorType) {
    case "ROLE_ADMIN":
      return "#7D78D1";
    case "ROLE_MEMBER":
      return "#FF8C8C";
  }
};

const returnAuthorValue = (authorType: string) => {
  switch (authorType) {
    case "ROLE_ADMIN":
      return "사감선생님";
    case "ROLE_MEMBER":
      return "자치위원회";
  }
};

const NoticeBoardItem: React.FC<NoticeBoardItemProps> = ({
  board_key,
  author,
  title,
  createdDate,
  editState,
}) => {
  const [modalState, setModalState] = useState<boolean>(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalState(false);
  };

  const [updateState, setUpdateState] = useState<boolean>(false);

  const deleteNotice = (boardId) => {
    return notice.adminDeleteNotice(boardId);
  };

  const onModify = (e) => {
    e.stopPropagation();
    setUpdateState(true);
    openModal();
  };

  const onDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      deleteNotice(board_key);
      await window.location.reload();
    }
  };

  return (
    <>
      <S.Container onClick={openModal}>
        <S.AuthorStyle AuthorColor={returnAuthorColor(author[0])!}>
          <span>[{returnAuthorValue(author[0])!}]</span>
        </S.AuthorStyle>
        <S.TitleStyle>
          <span>{title}</span>
        </S.TitleStyle>
        <S.DateStyle edit={editState}>
          <span>{createdDate.split("").slice(0, 10)}</span>
        </S.DateStyle>
        <S.BtnWrapper edit={editState}>
          <S.Btn BtnColor="gray" onClick={onModify}>
            수정
          </S.Btn>

          <S.Btn BtnColor="black" onClick={onDelete}>
            삭제
          </S.Btn>
        </S.BtnWrapper>
      </S.Container>
      <Modal
        board_key={board_key}
        modalState={modalState}
        closeModal={closeModal}
        authorColor={returnAuthorColor(author[0])!}
        updateState={updateState}
        setUpdateState={setUpdateState}
      />
    </>
  );
};

export default NoticeBoardItem;
