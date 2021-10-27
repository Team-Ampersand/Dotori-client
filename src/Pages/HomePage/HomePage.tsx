import React from 'react';
import * as S from './Style';
// import BannerPage from '../BannerPage/BannerPage';
import { MatchType } from '../../Utils/GlobalType';
// import { ManufactureDate } from '../../Utils/ManufactureDate';
import { PageTemplate } from '..';
import {
	UserProfile,
	Selfstudyboard,
	MealBoard,
	Sidebar,
} from '../../Components';

interface HomeProps {
	match: MatchType;
}

const testProfile = {
	name: '송시현',
	grade: '2',
	class: '2',
};

// const samplePost = [
// 	{
// 		title: "기숙사 공지사항",
// 		id: "domitory",
// 		list: [
// 			{ id: 1, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 		],
// 	},
// 	{
// 		title: "대나무 숲 게시글",
// 		id: "forest",
// 		list: [
// 			{ id: 1, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 		],
// 	},
// 	{
// 		title: "기상음악",
// 		id: "song",
// 		list: [
// 			{ id: 1, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 			{ id: 2, title: "Test", date: "2020년 00월 00일" },
// 		],
// 	},
// ];

const HomeContainer: React.FC<HomeProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<S.Container>
					<S.UserProfile>
						<UserProfile
							logoutFunc={() => alert('로그아웃')}
							userProfile={testProfile}
						/>
					</S.UserProfile>
					<S.Selfstudyboard>
						<Selfstudyboard />
					</S.Selfstudyboard>
					<S.MealBoard>
						<MealBoard />
					</S.MealBoard>
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default HomeContainer;
