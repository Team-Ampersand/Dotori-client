import React from "react";
import * as S from "./Style";

interface NoticeBoardItemProps {
  board_key: number;
  author: string;
  date: string;
}

const returnAuthorColor = (authorType: string) => {
  switch (authorType) {
    case "teacher":
      return "#7D78D1";
    case "student":
      return "#FF8C8C";
  }
};

const returnAuthorValue = (authorType: string) => {
  switch (authorType) {
    case "teacher":
      return "사감선생님";
    case "student":
      return "자치위원회";
  }
};

const NoticeBoardItem: React.FC<NoticeBoardItemProps> = ({
  board_key,
  author,
  date
}) => {
  return (
    <div>
      <S.Container>
        <S.AuthorStyle AuthorColor={returnAuthorColor(author)!}>
          <span>[{returnAuthorValue(author)!}]</span>
        </S.AuthorStyle>
        <S.TitleStyle>
          <span>이건 테스트 제목입니다.</span>
        </S.TitleStyle>
        <S.DateStyle>
          <span>{date}</span>
        </S.DateStyle>
      </S.Container>
    </div>
  );
};

export default NoticeBoardItem;
