import React, { useEffect, useState } from 'react';
import * as S from './Style';
import NoticeBoardItem from '../NoticeBoardItem/NoticeBoardItem';
import { Link } from 'react-router-dom';
import notice from '../../Api/notice';

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

interface board {
	boardKey: number;
	boardTitle: string;
	author: string;
	createDate: string;
}

const NoticeBoard: React.FC = () => {
	const [board, setBoard] = useState<board[]>([]);

	const getNotice = async () => {
		return await notice.adminGetNotice();
	};

	useEffect(() => {
		getNotice().then((res) => setBoard(res.data.content));
	}, []);

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
					{board &&
						board.map((noticeItem) => (
							<NoticeBoardItem
								key={noticeItem.boardKey}
								board_key={noticeItem.boardKey}
								author={noticeItem.author}
								title={noticeItem.boardTitle}
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
