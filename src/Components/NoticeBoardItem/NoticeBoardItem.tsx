import React, { useState } from 'react';
import * as S from './Style';
import { noticeDelete } from 'Api/notice';
import { useRole } from 'Hooks/useRole';

interface NoticeBoardItemProps {
	board_key: number;
	author: Array<any>;
	title: string;
	createdDate: string;
	editState: boolean;
}

const returnAuthorColor = (authorType: string) => {
	switch (authorType) {
		case 'ROLE_ADMIN':
			return '#7D78D1';
		case 'ROLE_COUNCILLOR':
			return '#EB8989';
		case 'ROLE_DEVELOPER':
			return '#6BB7EE';
	}
};

const returnAuthorValue = (authorType: string) => {
	switch (authorType) {
		case 'ROLE_ADMIN':
			return '사감선생님';
		case 'ROLE_COUNCILLOR':
			return '자치위원회';
		case 'ROLE_DEVELOPER':
			return '도토리';
	}
};

const NoticeBoardItem: React.FC<NoticeBoardItemProps> = ({
	board_key,
	author,
	title,
	createdDate,
	editState,
}) => {
	const [modalState, setModalState] = useState<boolean>(false);
	const role = useRole();

	const openModal = () => {
		setModalState(true);
	};

	const closeModal = (e) => {
		e.preventDefault();
		setModalState(false);
	};

	const [updateState, setUpdateState] = useState<boolean>(false);

	const deleteNotice = async (boardId) => {
		return await noticeDelete(role, boardId);
	};

	const onModify = (e) => {
		e.stopPropagation();
		setUpdateState(true);
		openModal();
	};

	const onDelete = (e) => {
		e.stopPropagation();
		if (window.confirm('정말 삭제하시겠어요?')) {
			deleteNotice(board_key);
			window.location.reload();
		}
	};

	return (
		<>
			<S.Container to={`/notice/${board_key}`}>
				<S.AuthorStyle AuthorColor={returnAuthorColor(author[0])!}>
					<span>{returnAuthorValue(author[0])!}</span>
				</S.AuthorStyle>
				<S.TitleStyle>
					<span>{title}</span>
				</S.TitleStyle>
				<S.DateStyle edit={editState}>
					<span>{createdDate.split('').slice(0, 10)}</span>
				</S.DateStyle>
				<S.BtnWrapper edit={editState}>
					<S.Btn BtnColor="gray" onClick={onModify}>
						수정
					</S.Btn>
					<S.Btn BtnColor="black" onClick={onDelete}>
						삭제
					</S.Btn>
				</S.BtnWrapper>
			</S.Container>
		</>
	);
};

export default NoticeBoardItem;
