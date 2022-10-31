import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { getPenaltyMainInfo } from '../../Api/penaltyInfo';
import * as I from '../../Assets/Svg';
import { useRole } from 'Hooks/useRole';
import { returnPenaltyValuesKorean } from '../../Utils/Libs/returnPenaltyValues';

interface PenaltyInfoModalProps {
	modalState: boolean;
	closeModal: () => void;
}

type penalty = {
	id: number;
	rule: string;
	date: string;
};

const PenaltyInfoModal: React.FC<PenaltyInfoModalProps> = ({
	modalState,
	closeModal,
}) => {
	const [penalty, setPenalty] = useState<Array<penalty>>([]);
	const [message, setMessage] = useState('');
	const role = useRole();

	const PenaltyMainInfo = async () => {
		const data = await getPenaltyMainInfo(role);
		return data;
	};

	useEffect(() => {
		PenaltyMainInfo().then((res) => {
			setPenalty(res?.data.data);
			setMessage(res?.data.message);
		});
	}, []);

	useEffect(() => {
		window.history.pushState({ page: 'modal' }, document.title);
		window.addEventListener('popstate', closeModal);
	}, []);

	return modalState ? (
		<S.Positioner>
			<S.Overlay onClick={closeModal} />
			<S.Container>
				<S.TitleWrapper>
					<S.Title>규정 위반 내역</S.Title>
					<I.X onClick={closeModal} />
				</S.TitleWrapper>
				<S.PenaltyInfoWrapper>
					{message === '규정위반 내역이 없습니다.' ? (
						<S.PenaltyException>
							<I.TextLogo></I.TextLogo>
							<span>규정위반 내역이 없어요</span>
						</S.PenaltyException>
					) : (
						penalty &&
						penalty.map((item, index) => (
							<S.PenaltyWrapper key={index}>
								<p>{returnPenaltyValuesKorean[item.rule]}</p>
								<p>{item.date}</p>
							</S.PenaltyWrapper>
						))
					)}
				</S.PenaltyInfoWrapper>
				<S.PenaltyCheckBtn onClick={closeModal}>확인</S.PenaltyCheckBtn>
			</S.Container>
		</S.Positioner>
	) : (
		<></>
	);
};

export default PenaltyInfoModal;
