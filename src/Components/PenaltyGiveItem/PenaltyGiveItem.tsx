import React, { useCallback, useState } from 'react';
import * as S from './Style';
import PenaltyGiveModal from 'Components/PenaltyGiveModal/PenaltyGiveModal';

interface Props {
	checked: Array<string>;
}

const PenaltyGiveItem: React.FC<Props> = ({ checked }) => {
	const [editState, setEditState] = useState(false);
	const GiveItemModal = useCallback(() => {
		if (checked.length === 0) {
			alert('규정을 위반한 학생을 체크해주세요');
			return;
		}
		setEditState(!editState);
	}, [checked.length, editState]);

	const closeModal = () => {
		setEditState(false);
	};

	return (
		<>
			<S.BreakDownBtn onClick={GiveItemModal}>규정위반 기록하기</S.BreakDownBtn>
			<PenaltyGiveModal
				modalState={editState}
				closeModal={closeModal}
				stuNum={checked}
			/>
		</>
	);
};

export default React.memo(PenaltyGiveItem);
