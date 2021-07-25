import React from 'react'
import * as S from './Style';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';

interface NoticeProps {
  match: MatchType
}

const NoticePage: React.FC<NoticeProps> = ({ match }) => {
  return (
    <PageTemplate match={match}>
      
    </PageTemplate>
  )
}

export default NoticePage