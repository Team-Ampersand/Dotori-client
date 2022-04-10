import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg';
import NoticeBoardItem from '../NoticeBoardItem/NoticeBoardItem';
import { Link, useNavigate } from 'react-router-dom';
import { getNotice, getNoticeDetail } from 'Api/notice';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';
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
			GetNoticeDetail(pageNumber).then((res) =>
				setBoard(res?.data.data.content)
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
							<S.EditBtn>작성</S.EditBtn>
						</Link>
						<S.EditBtn onClick={onToggle}>{editState ? '완료' : '편집'}</S.EditBtn>
					</S.BtnWrapper>
				)}
				<S.Container>
					{[...board]&&
						[...board]
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
			</S.Positioner>
		</>
	);
};

export default NoticeBoard;
