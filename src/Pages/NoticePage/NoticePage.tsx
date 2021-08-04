import React from 'react'
import * as S from './Style';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';

interface NoticeProps {
  match: MatchType;
}

type PostObj = {
  board_id: number,
  user_id: number,
  board_title: string,
  board_content: string,
  board_time: number
}

const NoticePage: React.FC<NoticeProps> = ({ match }) => {
  return (
    <PageTemplate match={match}>

    </PageTemplate>
  )
}

export default NoticePage