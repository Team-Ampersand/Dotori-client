import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg';
import NoticeBoardItem from '../NoticeBoardItem/NoticeBoardItem';
import { Link, useNavigate } from 'react-router-dom';
import notice from 'Api/notice';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';

interface board {
	id: number;
	title: string;
	roles: Array<any>;
	createdDate: string;
}

const NoticeBoard: React.FC = () => {
	const [board, setBoard] = useState<board[]>([]);
	const setLogged = useSetRecoilState(HasToken);
	const navigate = useNavigate();

	const getNotice = async () => {
		const role = localStorage.getItem('role');
		return await notice.getNotice(role);
	};
	const getNoticeDetail = async (page: number, navigate, setLogged) => {
		const role = localStorage.getItem('role');
		try {
			return await notice.getNoticeDetail(role, page);
		} catch (e: any) {
			if (e.message === 'Request failed with status code 401') {
				alert('로그아웃 되었어요. 다시 로그인 해주세요');

				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				localStorage.removeItem('role');

				navigate('/signin');
				setLogged(false);
				window.location.reload();
			} else {
				alert(e);
			}
		}
	};

	const [role, setRole] = useState<string | null>('');

	const settingRole = async () => {
		const role = localStorage.getItem('role');
		setRole(role);
	};

	const checkMember = () => {
		if (role === 'member') {
			return true;
		} else return false;
	};

	const [totalPage, setTotalPage] = useState(0);

	useEffect(() => {
		getNotice().then(async (res) => {
			(await res?.data.data) && setTotalPage(res?.data.data.totalPages);
		});
	}, []);

	useEffect(() => {
		settingRole();
		setTotalPage(totalPage);
		if (totalPage > 0) {
			getNoticeDetail(totalPage - 1, navigate, setLogged).then((response) =>
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
			await setTotalPage(totalPage - 1);
			await setPageNumber(pageNumber + 1);
		} else {
			alert('마지막 페이지에요');
			return;
		}
	};
	const prevPageClick = async () => {
		if (pageNumber === 1) {
			alert('첫번째 페이지에요');
			return;
		}
		if (pageNumber > 1) {
			await setTotalPage(totalPage + 1);
			await setPageNumber(pageNumber - 1);
		} else return;
	};

	return (
		<>
			<S.Positioner>
				{!checkMember() && (
					<S.BtnWrapper>
						<Link to={'/notice/write'}>
							<S.Btn>작성</S.Btn>
						</Link>
						<S.Btn onClick={onToggle}>{editState ? '완료' : '편집'}</S.Btn>
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
									role={role}
								/>
							))}
					<S.PageBtnWrapper>
						<div onClick={prevPageClick}>
							<span>
								<I.More />
							</span>
						</div>
						<label>{pageNumber}</label>
						<div onClick={nextPageClick}>
							<I.More />
						</div>
					</S.PageBtnWrapper>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeBoard;
