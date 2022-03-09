import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from 'Utils/Libs/PrivateRoute';
import PublicRoute from 'Utils/Libs/PublicRoute';

import {
	HomePage,
	LaptopPage,
	SongPage,
	NoticePage,
	SigninPage,
	SignupPage,
	NoticeWritePage,
	AuthorizationPage,
	PwChangePage,
	WithdrawlPage,
	NotFoundPage,
	PromotionPage,
	PenaltyPage,
	MassagePage,
} from './Pages';

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
			<PublicRoute restricted path="/signin" component={SigninPage} />
			<PublicRoute restricted path="/signup" component={SignupPage} />
			<PublicRoute restricted exact path="/password" component={PwChangePage} />
			<PrivateRoute path="/authorization" component={AuthorizationPage} />
			<PrivateRoute path="/Withdrawl" component={WithdrawlPage} />
			<PrivateRoute path="/change/password" component={PwChangePage} />
			<PrivateRoute path="/penalty" component={PenaltyPage} />
			<PrivateRoute path="/massage" component={MassagePage} />
			<Route component={NotFoundPage} />
		</>
	);
};

export default Router;
