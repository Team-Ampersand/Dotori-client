import React from 'react';
import { RequestedSongs } from '../../Components';
import { MatchType } from 'Utils/GlobalType';

interface AdminSongListPageProps {
	match: MatchType;
}

const SongDummyData = [
	{
		id: 1,
		user_id: 1,
		music: '에잇',
		singer: '아이유',
		link: 'https://www.youtube.com/watch?v=TgOu00Mf3kI',
		status: 0,
	},
	{
		id: 2,
		user_id: 1,
		music: '사랑하게 될 줄 알았어',
		singer: '전미도',
		link: 'https://www.youtube.com/watch?v=rOCymN-Rwiw',
		status: 2,
	},
	{
		id: 3,
		user_id: 1,
		music: '깡 Remix',
		singer: '하이어 뮤직',
		link: 'https://www.youtube.com/watch?v=Mn3qh0XrLcc',
		status: 1,
	},
	{
		id: 4,
		user_id: 1,
		music: 'MORE & MORE',
		singer: '트와이스',
		link: 'https://www.youtube.com/watch?v=mH0_XpSHkZo',
		status: 1,
	},
	{
		id: 5,
		user_id: 1,
		music: 'MORE & MORE',
		singer: '트와이스',
		link: 'https://www.youtube.com/watch?v=mH0_XpSHkZo',
		status: 2,
	},
	{
		id: 6,
		user_id: 1,
		music: 'Cloud 9',
		singer: '크래비티',
		link: 'https://www.youtube.com/watch?v=AUc9pglUn2E',
		status: 0,
	},
];

const AdminSongListPage: React.FC<AdminSongListPageProps> = ({ match }) => {
	return <RequestedSongs SongData={SongDummyData} match={match} />;
};
export default AdminSongListPage;
