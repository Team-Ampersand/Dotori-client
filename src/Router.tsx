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
} from './Pages';

const Router: React.FC = () => {
	return (
		<>
			<Route exact path="/" component={HomePage} />
			<Route path="/selfstudy" component={LaptopPage} />
			<Route exact path="/notice" component={NoticePage} />
			<Route path="/notice/write" component={NoticeWritePage} />
			<Route path="/song" component={SongPage} />
			<Route path="/signin" component={SigninPage} />
			<Route path="/signup" component={SignupPage} />
		</>
	);
};

export default Router;
