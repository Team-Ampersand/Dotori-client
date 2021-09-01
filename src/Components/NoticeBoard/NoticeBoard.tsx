import React, { useState } from 'react';
import * as S from './Style';
import NoticeBoardItem from '../NoticeBoardItem/NoticeBoardItem';
import { Link } from 'react-router-dom';

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
	for (let i = 1; i <= 5; i++) {
		pageNumbers.push(i);
	}

	const [editState, setEditState] = useState(false);
	const onToggle = () => setEditState(!editState);

	return (
		<>
			<S.Positioner>
				<S.BtnWrapper>
					<Link to={'/notice/write'}>
						<S.Btn>작성</S.Btn>
					</Link>
					<S.Btn onClick={onToggle}>{editState ? '완료' : '편집'}</S.Btn>
				</S.BtnWrapper>
				<S.Container>
					{noticeDummyData.map((noticeItem) => (
						<NoticeBoardItem
							board_key={noticeItem.board_key}
							author={noticeItem.author}
							editState={editState}
						/>
					))}
					<S.PageUl>
						{pageNumbers.map((numbers) => (
							<S.PageLi>{numbers}</S.PageLi>
						))}
					</S.PageUl>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeBoard;
