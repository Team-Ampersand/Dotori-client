import { useEffect, useState } from 'react';
import * as S from './Style';
import { getPenaltyInfo } from '../../Api/penaltyInfo';
import PenaltyBreakDown from 'Components/PenaltyBreakDown/PenaltyBreakDown';
import { useRole } from 'Hooks/useRole';

interface ModalProps {
	modalState: boolean;
	closePenaltyModal: () => void;
	stuNum: string;
}

const PenaltyModal: React.FC<ModalProps> = ({
	modalState,
	closePenaltyModal,
	stuNum,
}) => {
	const [penaltyList, setPenaltyList] = useState();
	const [penaltyMessage, setPenaltyMessage] = useState();
	const role = useRole();

	const GetPenaltyInfo = async () => {
		return await getPenaltyInfo(role, stuNum);
	};

	useEffect(() => {
		GetPenaltyInfo().then((res) => {
			res && setPenaltyList(res.data.data);
			res && setPenaltyMessage(res.data.message);
		});
	}, []);

	useEffect(() => {
		window.history.pushState({ page: 'modal' }, document.title);
		window.addEventListener('popstate', closePenaltyModal);
	});

	const onCancle = () => {
		closePenaltyModal();
	};

	return modalState ? (
		<>
			<S.Positioner>
				<S.Overlay onClick={closePenaltyModal} />
				<S.Container>
					<PenaltyBreakDown
						penaltyList={
							penaltyMessage === '규정위반 내역이 없습니다'
								? penaltyMessage
								: penaltyList
						}
						penaltyMessage={penaltyMessage}
					/>
					<S.BtnWrapper>
						<S.CompleteBtn onClick={onCancle}>확인</S.CompleteBtn>
					</S.BtnWrapper>
				</S.Container>
			</S.Positioner>
		</>
	) : (
		<></>
	);
};

export default PenaltyModal;
