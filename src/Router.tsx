import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'Utils/Libs/PrivateRoute';
import PublicRoute from 'Utils/Libs/PublicRoute';

const HomePage = lazy(
	() => import(/* webpackChunkName: "home" */ './Pages/HomePage/HomePage')
);
const PromotionPage = lazy(
	() =>
		import(
			/* webpackChunkName: "promotion" */ './Pages/PromotionPage/PromotionPage'
		)
);
const SelfStudyPage = lazy(
	() =>
		import(
			/* webpackChunkName: "selfstudy" */ './Pages/SelfStudyPage/SelfStudyPage'
		)
);
const NoticePage = lazy(
	() => import(/* webpackChunkName: "notice" */ './Pages/NoticePage/NoticePage')
);
const NoticeWritePage = lazy(
	() =>
		import(
			/* webpackChunkName: "noticewrite" */ './Pages/NoticeWritePage/NoticeWritePage'
		)
);
const SongPage = lazy(
	() => import(/* webpackChunkName: "song" */ './Pages/SongPage/SongPage')
);
const SigninPage = lazy(
	() => import(/* webpackChunkName: "signin" */ './Pages/SigninPage/SigninPage')
);
const SignupPage = lazy(
	() => import(/* webpackChunkName: "signup" */ './Pages/SignupPage/SignupPage')
);
const PwChangePage = lazy(
	() =>
		import(
			/* webpackChunkName: "passwordchange" */ './Pages/PwChangePage/PwChangePage'
		)
);
const NoticeWatchPage = lazy(
	() => import(/* webpackChunkName: "noticedetail" */'./Pages/NoticeWatchPage/NoticeWatchPage')
);
const AuthorizationPage = lazy(
	() =>
		import(
			/* webpackChunkName: "authorization" */ './Pages/AuthorizationPage/AuthorizationPage'
		)
);
const WithdrawlPage = lazy(() => import('./Pages/WithdrawlPage/WithdrawlPage'));
const PenaltyPage = lazy(() => import('./Pages/PenaltyPage/PenaltyPage'));
const MassagePage = lazy(() => import('./Pages/MassagePage/MassagePage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

const Router: React.FC = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<PublicRoute restricted={false}>
						<PromotionPage />
					</PublicRoute>
				}
			/>
			<Route
				path="/home"
				element={
					<PrivateRoute>
						<HomePage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/selfstudy"
				element={
					<PrivateRoute>
						<SelfStudyPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/notice"
				element={
					<PrivateRoute>
						<NoticePage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/notice/write"
				element={
					<PrivateRoute>
						<NoticeWritePage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/notice/:board_key"
				element={
					<PrivateRoute>
						<NoticeWatchPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/song"
				element={
					<PrivateRoute>
						<SongPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/signin"
				element={
					<PublicRoute restricted={true}>
						<SigninPage />
					</PublicRoute>
				}
			/>
			<Route
				path="/signup"
				element={
					<PublicRoute restricted={true}>
						<SignupPage />
					</PublicRoute>
				}
			/>
			<Route
				path="/password"
				element={
					<PublicRoute restricted={true}>
						<PwChangePage />
					</PublicRoute>
				}
			/>
			<Route
				path="/authorization"
				element={
					<PrivateRoute>
						<AuthorizationPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/Withdrawl"
				element={
					<PrivateRoute>
						<WithdrawlPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/change/password"
				element={
					<PrivateRoute>
						<PwChangePage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/penalty"
				element={
					<PrivateRoute>
						<PenaltyPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/massage"
				element={
					<PrivateRoute>
						<MassagePage />
					</PrivateRoute>
				}
			/>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default Router;
