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
		return await getNoticeDetail(role, page);
	};

	const checkMember = () => {
		if (role === 'member') {
			return true;
		} else return false;
	};

	const [totalPage, setTotalPage] = useState(0);
	const [pageNumber, setPageNumber] = useState(0);
	const [footerNumber, setFooterNumber] = useState(1);

	useEffect(() => {
		GetNotice().then(async (res) => {
			(await res?.data.data) && setTotalPage(res?.data.data.totalPages);
		});
	}, []);

	useEffect(() => {
		setTotalPage(totalPage);
		setFooterNumber(footerNumber);
		if (totalPage > 0) {
			GetNoticeDetail(pageNumber).then((response) =>
				setBoard(response?.data.data.content)
			);
		}
	}, [totalPage]);

	const [editState, setEditState] = useState(false);
	const onToggle = () => {
		setEditState(!editState);
	};

	useEffect(() => {
		setPageNumber(pageNumber);
	}, [pageNumber]);

	const nextPageClick = async () => {
		if (pageNumber < totalPage) {
			setTotalPage(totalPage - 1);
			setPageNumber(pageNumber + 1);
			setFooterNumber(footerNumber + 1);
		} else return;
	};
	const prevPageClick = async () => {
		if (footerNumber > 1) {
			setTotalPage(totalPage + 1);
			setPageNumber(pageNumber - 1);
			setFooterNumber(footerNumber - 1);
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
				{[...board].length === 0 ? (
					<S.ExceptionWrapper>
						<I.TextLogo />
						현재 작성된 공지사항이 없어요!
					</S.ExceptionWrapper>
				) : (
					<S.Container>
						{[...board] &&
							[...board].map((noticeItem) => (
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
							{footerNumber === 1 ? (
								<S.EmptyBtn />
							) : (
								<div onClick={prevPageClick}>
									<I.NoticeMore />
								</div>
							)}
							<label>{footerNumber}</label>
							{totalPage > 1 ? (
								<div onClick={nextPageClick}>
									<span>
										<I.NoticeMore />
									</span>
								</div>
							) : (
								<S.EmptyBtn />
							)}
						</S.PageBtnWrapper>
					</S.Container>
				)}
			</S.Positioner>
		</>
	);
};

export default NoticeBoard;
