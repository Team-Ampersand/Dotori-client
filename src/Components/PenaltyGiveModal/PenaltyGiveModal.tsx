/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import * as S from './Style';
import * as I from 'Assets/Svg/index';
import { updatePenaltyInfo } from 'Api/penaltyInfo';
import { useRole } from 'Hooks/useRole';
import { useRecoilState } from 'recoil';
import PenaltyGiveTagItem from 'Components/PenaltyGiveTagItem/PenaltyGiveTagItem';
import { returnPenaltyValue, returnPenaltyValueReverse } from './returnValues';
import {
	fieldSelected,
	penaltySelected,
} from '../../Atoms/AtomContainer';

interface ModalProps {
	modalState: boolean;
	closeModal: () => void;
	stuNum: Array<string>;
	setCheckItems: any;
}

const FieldList = [
	"금지 물품 반입",
	"사감 지도 불이행",
	"시간 관 소홀 및 이탈 행위",
	"물품 훼손 및 절도",
	"취침 방해",
	"공동 생활 방해 및 위생 상태 불량",
	"애정 행위",
	"기숙사 출입 금지 구역 출입",
	"학습실 면학분위기 저해",
	"외부인 출입 관여"
]

const PenaltyList = {
	Ban: ["화기류", "흉기", "주류", "담배", "사행성기구", "음식"],
	Unfulfill: ["사감의 학습 및 생활지도 불이행"],
	Time: ["지각", "외출", "외박"],
	Damage: ["물품훼손", "절도", "갈취"],
	Sleep: ["타호실 출입", "전자기기 소지"],
	Hygiene: ["고성방가", "지정시간 외 기숙사 출입", "세탁물 방치", "공공시설물 사용규정 위반", "부착된 게시물 훼손", "전자기기 소지 혹은 사용", "호실 정리정돈 상태 불량", "기숙사 환경 오염"],
	Affection: ["애정 행위", "성적 행위"],
	Entry: ["출입 금지 구역 출입"],
	Learn: ["학습실 면학분위기 저해"],
	Outside: ["외부인 출입 허가"]
}

const GiveModal: React.FC<ModalProps> = ({
	modalState,
	closeModal,
	stuNum,
	setCheckItems,
}) => {
	const role = useRole();
	const [fieldSelect, setFieldSelect] = useRecoilState(fieldSelected);
	const [penaltySelect, setPenaltySelect] = useRecoilState(penaltySelected);
	const [currentField, setCurrentField] = useState<string>('');
	const [currentPenalty, setCurrentPenalty] = useState<string>('');

	const handleSelect = (state: string[], setState: any, select: string) => {
		if(!state.includes(select)) {
			setState([...state.filter((el) => el !== ""), select]);
		}
	}

	const handleDelete = (state: string[], setState: any, select: string) => {
		setState([...state.filter((el) => el !== select)]);
	}

	const returnSelect = (state: string | any[], select: string, currentSelect: string) => {
		return state.includes(select) 
		? currentSelect === select 
			? "currentSelect selected" 
			: "selected" 
		: "";
	}

	const mappingPenaltyList = (currentField: string) => {
		switch(currentField) {
			case "금지 물품 반입":
				return PenaltyList.Ban.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
					>
						{penalty}
					</li>
					
				));
			case "사감 지도 불이행":
				return PenaltyList.Unfulfill.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
					>
						{penalty}
					</li>
				));
			case "시간 관 소홀 및 이탈 행위":
				return PenaltyList.Time.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
					>
						{penalty}
					</li>
				));
			case "물품 훼손 및 절도":
				return PenaltyList.Damage.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
					>
						{penalty}
					</li>
				));
			case "취침 방해":
				return PenaltyList.Sleep.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
						>
						{penalty}
					</li>
				));
			case "공동 생활 방해 및 위생 상태 불량":
				return PenaltyList.Hygiene.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
						>
						{penalty}
					</li>
				));	
			case "애정 행위":
				return PenaltyList.Affection.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
						>
						{penalty}
					</li>
				));
			case "기숙사 출입 금지 구역 출입":
				return PenaltyList.Entry.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
						>
						{penalty}
					</li>
				));
			case "학습실 면학분위기 저해":
				return PenaltyList.Learn.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
						>
						{penalty}
					</li>
				));
			case "외부인 출입 관여":
				return PenaltyList.Outside.map((penalty, idx) => (
					<li
						key={idx}
						onClick={() => {
							handleSelect(penaltySelect, setPenaltySelect, returnPenaltyValue(penalty));
							setCurrentPenalty(penalty);
						}}
						className={returnSelect(penaltySelect, penalty, currentPenalty)}
						>
						{penalty}
					</li>
				));
			default:
				return(
					<S.DefaultContainer>
						대분류를 선택해 주세요.
					</S.DefaultContainer>
				)		
		}
	}
 
	const givePenaltyUpdate = async () => {
		await updatePenaltyInfo(role, date, penaltySelect, stuNum);
		alert('규정위반 내역을 추가했어요');
	};

	const [date, setDate] = useState('');

	const onComplete = async () => {
		if (date === '') {
			alert('날짜를 설정해주세요!');
			return;
		} else if (penaltySelect.length === 0) {
			alert('규정위반 내역을 설정해주세요!');
			return;
		}
		await givePenaltyUpdate();
		closeModal();
		setCheckItems([]);
		window.location.reload();
	};
	
	return modalState ? (
		<>
			<S.Positioner>
				<S.Overlay onClick={closeModal} />
				<S.Container>
					<S.PenaltyGiveContainer>
						<S.DateWrapper>
							<S.Date
								type="date"
								onChange={(e) => setDate(e.target.value)}
								required
							/>
						</S.DateWrapper>
						<S.SelectWrapper>
							<S.SelectBox>
								{FieldList.map((field, idx) => (
									<li 
										key={idx}
										onClick={() => {
											handleSelect(fieldSelect, setFieldSelect, field);
											setCurrentField(field);
										}}
										className={returnSelect(fieldSelect, field, currentField)}
										>
										{field}
									</li>
								))}
							</S.SelectBox>
							<S.SelectBox2>{mappingPenaltyList(currentField)}</S.SelectBox2>
						</S.SelectWrapper>
						{penaltySelect.length === 0 ?
							<S.ExceptionContainer>
								<I.TextLogo />TIP! 태그를 선택하시면 삭제하실 수 있어요.
							</S.ExceptionContainer>
							:
							<S.TagContainer>
							{penaltySelect.map((penalty, idx) => {
								return(
									<PenaltyGiveTagItem key={idx} >
										<S.TagWrapper onClick={() => handleDelete(penaltySelect, setPenaltySelect, penalty)}>{returnPenaltyValueReverse(penalty)}</S.TagWrapper>
									</PenaltyGiveTagItem>
								)
							})}
							</S.TagContainer>
						}
						<S.BtnWrapper>
							<S.GiveBtn onClick={onComplete}>부여하기</S.GiveBtn>
						</S.BtnWrapper>
					</S.PenaltyGiveContainer>
				</S.Container>
			</S.Positioner>
		</>
	) : (
		<></>
	);
};

export default GiveModal;
