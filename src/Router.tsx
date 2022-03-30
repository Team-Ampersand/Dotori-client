import { Skelethon } from 'Components';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'Utils/Libs/PrivateRoute';
import PublicRoute from 'Utils/Libs/PublicRoute';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const PromotionPage = lazy(() => import('./Pages/PromotionPage/PromotionPage'));
const SelfStudyPage = lazy(() => import('./Pages/SelfStudyPage/SelfStudyPage'));
const NoticePage = lazy(() => import('./Pages/NoticePage/NoticePage'));
const NoticeWritePage = lazy(
	() => import('./Pages/NoticeWritePage/NoticeWritePage')
);
const SongPage = lazy(() => import('./Pages/SongPage/SongPage'));
const SigninPage = lazy(() => import('./Pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('./Pages/SignupPage/SignupPage'));
const PwChangePage = lazy(() => import('./Pages/PwChangePage/PwChangePage'));
const AuthorizationPage = lazy(
	() => import('./Pages/AuthorizationPage/AuthorizationPage')
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
