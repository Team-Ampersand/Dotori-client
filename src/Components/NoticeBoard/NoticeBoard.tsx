import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg';
import NoticeBoardItem from '../NoticeBoardItem/NoticeBoardItem';
import { Link } from 'react-router-dom';
import { getNotice, getNoticeDetail } from 'Api/notice';
import { useRole } from 'Hooks/useRole';

interface board {
	id: number;
	title: string;
	roles: Array<any>;
	createdDate: string;
}

const NoticeBoard: React.FC = () => {
	const [board, setBoard] = useState<board[]>([]);
	const role = useRole();

	const GetNotice = async () => {
		return await getNotice(role);
	};
	const GetNoticeDetail = async (page: number) => {
		try {
			return await getNoticeDetail(role, page);
		} catch (e: any) {
			alert(e);
		}
	};

	const checkMember = () => {
		if (role === 'member') {
			return true;
		} else return false;
	};

	const [totalPage, setTotalPage] = useState(0);

	useEffect(() => {
		GetNotice().then(async (res) => {
			(await res?.data.data) && setTotalPage(res?.data.data.totalPages);
		});
	}, []);

	useEffect(() => {
		setTotalPage(totalPage);
		if (totalPage > 0) {
			GetNoticeDetail(totalPage - 1).then((response) =>
				setBoard(response?.data.data.content)
			);
		}
	}, [totalPage]);

	const [editState, setEditState] = useState(false);
	const onToggle = () => {
		setEditState(!editState);
	};

	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		setPageNumber(pageNumber);
	}, [pageNumber]);

	const nextPageClick = async () => {
		if (pageNumber < totalPage) {
			setTotalPage(totalPage - 1);
			setPageNumber(pageNumber + 1);
		} else {
			alert('마지막 페이지에요');
			return;
		}
	};
	const prevPageClick = async () => {
		if (pageNumber > 1) {
			setTotalPage(totalPage + 1);
			setPageNumber(pageNumber - 1);
		} else return;
	};

	return (
		<>
			<S.Positioner>
				{!checkMember() && (
					<S.BtnWrapper>
						<Link to={'/notice/write'}>
							<S.WriteBtn>작성</S.WriteBtn>
						</Link>
						<S.EditBtn onClick={onToggle}>
							{editState ? '완료' : '편집'}
						</S.EditBtn>
					</S.BtnWrapper>
				)}
				<S.Container>
					{[...board].reverse() &&
						[...board]
							.reverse()
							.map((noticeItem) => (
								<NoticeBoardItem
									key={noticeItem.id}
									board_key={noticeItem.id}
									author={noticeItem.roles}
									title={noticeItem.title}
									createdDate={noticeItem.createdDate}
									editState={editState}
								/>
							))}
					<S.PageBtnWrapper>
						{pageNumber === 1 ? (
							<S.EmptyBtn />
						) : (
							<div onClick={prevPageClick}>
								<I.NoticeMore />
							</div>
						)}
						<label>{pageNumber}</label>
						{totalPage > 1 ? (
							<div onClick={nextPageClick}>
								<span>
									<I.NoticeMore />
								</span>
							</div>
						) : (
							<div></div>
						)}
					</S.PageBtnWrapper>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeBoard;
