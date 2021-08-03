import React from 'react'
import * as S from './Style'

interface NoticeBoardItemProps {
  board_key: number,
  author: string,
  date: number
}

const returnAuthorColor = (authorType: string) => {
  switch (authorType) {
    case 'teacher':
      return '#7D78D1';
    case 'student':
      return '#FF8C8C';
  }
}

const NoticeBoardItem: React.FC<NoticeBoardItemProps> = ({ board_key, author, date}) => {
  return (
    <div>
      <S.Container>
        <S.AuthorStyle AuthorColor={returnAuthorColor(author)!} />
      </S.Container>
    </div>
  )
}

export default NoticeBoardItem;
