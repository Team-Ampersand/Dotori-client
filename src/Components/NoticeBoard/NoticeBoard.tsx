import React from "react";
import * as S from "./Style";
import NoticeBoardItem from "../NoticeBoardItem/NoticeBoardItem";

const NoticeBoard: React.FC = () => {
  return (
    <div>
      <S.Positioner>
        <S.Container>
          <NoticeBoardItem board_key={1} author="teacher" date="20210619" />
          <NoticeBoardItem board_key={2} author="teacher" date="20210619" />
          <NoticeBoardItem board_key={3} author="student" date="20210619" />
          <NoticeBoardItem board_key={4} author="teacher" date="20210619" />
          <NoticeBoardItem board_key={5} author="student" date="20210619" />
          <NoticeBoardItem board_key={6} author="student" date="20210619" />
        </S.Container>
      </S.Positioner>
    </div>
  );
};

export default NoticeBoard;
