import React, { useState } from 'react';
import * as S from './Style';
import Modal from '../Modal/Modal';

interface NoticeBoardItemProps {
	board_key: number;
	author: string;
}

const returnAuthorColor = (authorType: string) => {
	switch (authorType) {
		case 'teacher':
			return '#7D78D1';
		case 'student':
			return '#FF8C8C';
	}
};

const returnAuthorValue = (authorType: string) => {
	switch (authorType) {
		case 'teacher':
			return '사감선생님';
		case 'student':
			return '자치위원회';
	}
};

const NoticeBoardItem: React.FC<NoticeBoardItemProps> = ({
	board_key,
	author,
}) => {
	const [modalState, setModalState] = useState(false);

	const openModal = () => {
		setModalState(true);
	};

	const closeModal = (e) => {
		e.preventDefault();
		setModalState(false);
	};

	return (
		<>
			<S.Container onClick={openModal}>
				<S.AuthorStyle AuthorColor={returnAuthorColor(author)!}>
					<span>[{returnAuthorValue(author)!}]</span>
				</S.AuthorStyle>
				<S.TitleStyle>
					<span>이건 테스트 제목입니다.</span>
				</S.TitleStyle>
				<S.DateStyle>
					<span>20040619</span>
				</S.DateStyle>
			</S.Container>
			<Modal
				board_key={board_key}
				modalState={modalState}
				closeMoal={closeModal}
				authorColor={returnAuthorColor(author)!}
			/>
		</>
	);
};

export default NoticeBoardItem;
