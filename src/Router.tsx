import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'Utils/Libs/PrivateRoute';
import PublicRoute from 'Utils/Libs/PublicRoute';

import {
	HomePage,
	SelfStudyPage,
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
		<Routes>
			<Route path="/" element={<PublicRoute restricted={false}><PromotionPage/></PublicRoute>} />
			<Route path="/home" element={<PrivateRoute><HomePage/></PrivateRoute>}/>
			<Route path="/selfstudy" element={<PrivateRoute><SelfStudyPage/></PrivateRoute>}/>
			<Route path="/notice" element={<PrivateRoute><NoticePage/></PrivateRoute>}/>						
			<Route path="/notice/write" element={<PrivateRoute><NoticeWritePage/></PrivateRoute>}/>
			<Route path="/song" element={<PrivateRoute><SongPage/></PrivateRoute>}/>
			<Route path="/signin" element={<PublicRoute restricted={false}><SigninPage/></PublicRoute>}/>
			<Route path="/signup" element={<PublicRoute restricted={false}><SignupPage /></PublicRoute>}/>
			<Route path="/password" element={<PublicRoute restricted={false}><PwChangePage/></PublicRoute>}/>
			<Route path="/authorization" element={<PrivateRoute><AuthorizationPage/></PrivateRoute>}/>
			<Route path="/Withdrawl" element={<PrivateRoute><WithdrawlPage/></PrivateRoute>}/>
			<Route path="/change/password" element={<PrivateRoute><PwChangePage/></PrivateRoute>}/>																								
			<Route path="/penalty" element={<PrivateRoute><PenaltyPage/></PrivateRoute>}/>
			<Route path="/massage" element={<PrivateRoute><MassagePage/></PrivateRoute>}/>
			<Route element={<NotFoundPage />} />
		</Routes>
	);
};

export default Router;
