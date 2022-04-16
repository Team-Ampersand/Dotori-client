import React, { useCallback, useState } from 'react';
import * as S from './Style';
import PenaltyGiveModal from 'Components/PenaltyGiveModal/PenaltyGiveModal';
import { toast } from 'react-toastify';

interface Props {
	checked: Array<string>;
	setCheckItems: any;
}

const PenaltyGiveItem: React.FC<Props> = ({ checked, setCheckItems }) => {
	const [editState, setEditState] = useState(false);
	const GiveItemModal = useCallback(() => {
		if (checked.length === 0) {
			toast.warning('규정을 위반한 학생을 체크해주세요');
			return;
		}
		setEditState(!editState);
	}, [checked.length, editState]);

	const closeModal = () => {
		setEditState(false);
	};

	return (
		<>
			<S.BreakDownBtn onClick={GiveItemModal}>규정 위반 기록</S.BreakDownBtn>
			<PenaltyGiveModal
				modalState={editState}
				closeModal={closeModal}
				stuNum={checked}
				setCheckItems={setCheckItems}
			/>
		</>
	);
};

export default React.memo(PenaltyGiveItem);
