import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeWrite, Sidebar } from '../../Components';
import * as S from './Style';

interface NoticeWriteProps {
  match: MatchType;
}

const NoticeWritePage: React.FC<NoticeWriteProps> = ({ match }) => {
  return (
    <PageTemplate match={match}>
      <Sidebar />
      <NoticeWrite />
    </PageTemplate>
  );
};

export default NoticeWritePage;
