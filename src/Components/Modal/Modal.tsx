import React from 'react';
import * as S from './Style';

interface ModalProps {
	board_key: number;
	modalState: boolean;
	closeModal: (e: any) => void;
	authorColor: string;
}

const Modal: React.FC<ModalProps> = ({
	board_key,
	modalState,
	closeModal,
	authorColor,
}) => {
	return modalState ? (
		<div>
			<S.Positioner>
				<S.Overlay onClick={(e) => closeModal(e)} />
				<S.Container>
					<S.Title authorColor={authorColor}>
						이건 테스트 제목입니다.
						<S.Close onClick={(e) => closeModal(e)}>X</S.Close>
					</S.Title>
					<S.Content>
						가나다라마 아에이오우 자음과 모음이 만나서 글자를 만들어요
						가나다라마 아에이오우 그 글자들로 우린 얘기 해~
					</S.Content>
				</S.Container>
			</S.Positioner>
		</div>
	) : (
		<></>
	);
};

export default Modal;
