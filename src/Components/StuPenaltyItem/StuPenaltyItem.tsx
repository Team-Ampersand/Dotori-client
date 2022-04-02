import React, { useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import PenaltyModal from '../PenaltyModal/PenaltyModal';
import ModifyModal from 'Components/ModifyModal/ModifyModal';

interface StuPenaltyItemProps {
	stuNum: string;
	name: string;
	ruleBigViolationList: string[];
}

const StuPenaltyItem: React.FC<StuPenaltyItemProps> = ({
	stuNum,
	name,
	ruleBigViolationList
}) => {
	const [editPenaltyState, setEditPenaltyState] = useState(false);
	const [editModifyState, setEditModifyState] = useState(false);

	const closePenaltyModal = () => {
		setEditPenaltyState(false);
	};

	const closeModifyModal = () => {
		setEditModifyState(false);
	};
	const returnPenaltyIconValue = (penaltyIconType: string) => {
		switch (penaltyIconType) {
			case '금지 물품 반입':
				return <I.Ban/>;
			case '사감 지도 불이행':
				return <I.Unfulfill/>;
			case '시간 관 소홀 및 이탈 행위':
				return <I.Time/>;
			case '물품 훼손 및 절도':
				return <I.Damage/>;
			case '취침 방해':
				return <I.Sleep/>;
			case '공동 생활 방해 및 위생 상태 불량':
				return <I.Hygiene/>;
			case '애정 행위':
				return <I.Affect/>;
			case '기숙사 출입 금지 구역 출입':
				return <I.Entry/>;
			case '학습실 면학분위기 저해':
				return <I.Learn/>;
			case '외부인 출입 관여':
				return <I.Outside/>;				
			default:
				return '';
		}
	};
	return (
		<>
			<S.Container>
				<S.StuInfoWrapper>
					<S.StuNumStyle>{stuNum}</S.StuNumStyle>
					<S.NameStyle>{name}</S.NameStyle>
					<S.PenaltyStyle>
						{ruleBigViolationList.map((item, idx) => 
							<S.PenaltyIconWrapper>{returnPenaltyIconValue(item)}
								<div className="tooltiptext">{item}</div>
							</S.PenaltyIconWrapper>)
						}
					</S.PenaltyStyle>
				</S.StuInfoWrapper>
				<S.BtnWrapper>
					<S.EditModifyBtn onClick={() => setEditModifyState(!editModifyState)}>
						수정
					</S.EditModifyBtn>
					{editModifyState && (
						<ModifyModal
							modalState={editModifyState}
							closeModifyModal={closeModifyModal}
							stuNum={stuNum}
						/>
					)}
					<S.CheckBtn onClick={() => setEditPenaltyState(!editPenaltyState)}>
						자세히 보기
					</S.CheckBtn>
					{editPenaltyState && (
						<PenaltyModal
							modalState={editPenaltyState}
							closePenaltyModal={closePenaltyModal}
							stuNum={stuNum}
						/>
					)}
				</S.BtnWrapper>
			</S.Container>
		</>
	);
};

export default StuPenaltyItem;
