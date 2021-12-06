import React from 'react';
import { Route } from 'react-router-dom';

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
} from './Pages';

const Router: React.FC = () => {
	return (
		<>
			<Route exact path="/" component={HomePage} />
			<Route path="/selfstudy" component={LaptopPage} />
			<Route exact path="/notice" component={NoticePage} />
			<Route path="/notice/write" component={NoticeWritePage} />
			<Route path="/song" component={SongPage} />
			<Route path="/point" component={PointPage} />
			<Route path="/signin" component={SigninPage} />
			<Route path="/signup" component={SignupPage} />
			<Route exact path="/password" component={PwChangePage} />
			<Route path="/authorization" component={AuthorizationPage} />
			<Route path="/Withdrawl" component={WithdrawlPage} />
			<Route path="/change/password" component={PwChangePage} />
		</>
	);
};

export default Router;
