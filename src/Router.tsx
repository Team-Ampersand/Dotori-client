import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage, LaptopPage, SongPage, NoticePage } from './Pages';

const Router: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/laptop" component={LaptopPage} />
      <Route path="/notice" component={NoticePage} />
      <Route path="/notice/write" component={() => <div>공지사항 작성 페이지</div>} />
      <Route path="/song" component={SongPage} />
    </>
  );
};

export default Router
