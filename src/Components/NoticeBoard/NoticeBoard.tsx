import React from 'react';
import * as S from './Style';
import NoticeBoardItem from '../NoticeBoardItem/NoticeBoardItem';
import axios from 'axios';

const noticeDummyData = [
	{
		board_key: 1,
		author: 'teacher',
	},
	{
		board_key: 2,
		author: 'teacher',
	},
	{
		board_key: 3,
		author: 'student',
	},
	{
		board_key: 4,
		author: 'teacher',
	},
	{
		board_key: 5,
		author: 'student',
	},
	{
		board_key: 6,
		author: 'student',
	},
	{
		board_key: 7,
		author: 'teacher',
	},
];

const NoticeBoard: React.FC = () => {
	const pageNumbers: Array<number> = [];
	for (let i = 2; i <= 7; i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<S.Positioner>
				<S.Container>
					{noticeDummyData.map((noticeItem) => (
						<NoticeBoardItem
							board_key={noticeItem.board_key}
							author={noticeItem.author}
						/>
					))}
					<S.PageUl>
						<S.PageLi>1</S.PageLi>
						{pageNumbers.map((numbers) => (
							<S.PageLi>{numbers}</S.PageLi>
						))}
					</S.PageUl>
				</S.Container>
			</S.Positioner>
		</div>
	);
};

export default NoticeBoard;
