import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "Utils/Libs/PrivateRoute";
import PublicRoute from "Utils/Libs/PublicRoute";

import {
  HomePage,
  LaptopPage,
  SongPage,
  NoticePage,
  SigninPage,
  SignupPage,
  NoticeWritePage,
  PointPage,
  AuthorizationPage,
  PwChangePage,
  WithdrawlPage,
  NotFoundPage,
  PromotionPage,
  PenaltyPage,
} from "./Pages";

const Router: React.FC = () => {
  return (
    <>
      <PublicRoute
        restricted={false}
        exact
        path="/"
        component={PromotionPage}
      />
      <PrivateRoute exact path="/home" component={HomePage} />
      <PrivateRoute path="/selfstudy" component={LaptopPage} />
      <PrivateRoute exact path="/notice" component={NoticePage} />
      <PrivateRoute path="/notice/write" component={NoticeWritePage} />
      <PrivateRoute path="/song" component={SongPage} />
      <PrivateRoute path="/point" component={PointPage} />
      <PublicRoute restricted path="/signin" component={SigninPage} />
      <PublicRoute restricted path="/signup" component={SignupPage} />
      <PublicRoute restricted exact path="/password" component={PwChangePage} />
      <PrivateRoute path="/authorization" component={AuthorizationPage} />
      <PrivateRoute path="/Withdrawl" component={WithdrawlPage} />
      <PrivateRoute path="/change/password" component={PwChangePage} />
      <PrivateRoute path="/penalty" component={PenaltyPage} />
      <Route component={NotFoundPage} />
    </>
  );
};

export default Router;
