import { deletePenaltyInfo } from 'Api/penaltyInfo';
import { useRole } from 'Hooks/useRole';
import React from 'react';
import * as S from './Style';

interface ModifyListProps {
	modifyList: any;
	role: string | null;
	modifyMessage: any;
}

const returnPenaltyValue = (penaltyType: string) => {
	switch (penaltyType) {
		case 'FIREARMS':
			return '화기류';
		case 'WEAPON':
			return '흉기';
		case 'ALCOHOL':
			return '주류';
		case 'TOBACCO':
			return '담배';
		case 'MEANDERING_APPARATUS':
			return '사행성기구';
		case 'FOOD':
			return '음식';
		case 'MANAGER_GUIDANCE':
			return '사감의 학습 및 생활지도 불이행';
		case 'TIME':
			return '지각';
		case 'OUTING':
			return '외출';
		case 'OVERNIGHT_STAY':
			return '외박';
		case 'DAMAGE_OF_GOODS':
			return '물품훼손';
		case 'THEFT':
			return '절도';
		case 'CHANTAGE':
			return '갈취';
		case 'DISTURBING_SLEEP':
			return '타호실 출입';
		case 'ELECTRONIC_DEVICE':
			return '전자기기 소지';
		case 'LOUD':
			return '고성방가';
		case 'INCORRECT_ENTRY':
			return '지정시간 외 기숙사 출입';
		case 'LAUNDRY':
			return '세탁기,건조기에 세탁물 방치';
		case 'VIOLATION_OF_THE_USE_OF_FACILITIES':
			return '공공시설물 사용규정 위반';
		case 'DAMAGE_OF_POST':
			return '부착된 게시물 훼손 및 낙서';
		case 'POSSESSION_OF_ELECTRONICS_DEVICES':
			return '사용 제한 시간 중 전자기기 소지 혹은 사용';
		case 'CLEAN_COUNDITION_BAD':
			return '호실 정리정돈 상태 불량';
		case 'ENVIRONMENT_POLLUTION':
			return '기숙사 환경 오염';
		case 'AFFECTIONATE_ACT':
			return '애정 행위';
		case 'SEXUAL_ACT':
			return '성적 행위';
		case 'ENTRY_TO_PROHIBITED_AREAS':
			return '출입금지 구역 출입';
		case 'VIOLATION_OF_STUDY_ROOM_RULES':
			return '학습실 면학분위기 저해';
		case 'OUTSIDER_ENTRY':
			return '외부인 출입 허가';
		default:
			return '';
	}
};

const ModifyList: React.FC<ModifyListProps> = ({
	modifyList,

	modifyMessage,
}) => {
	const role = useRole();
	const ModifyPenaltyList =
		modifyList &&
		modifyList.map((item) => {
			const deletePenalty = async (PenaltyId) => {
				return await deletePenaltyInfo(role, PenaltyId);
			};
			const onDelete = async () => {
				if (window.confirm('정말 삭제하시겠어요?')) {
					await deletePenalty(item.id);
					window.location.reload();
				}
			};
			return (
				<>
					<S.CategoriesWrapper>
						<S.DateWrapper>{item.date}</S.DateWrapper>
						<S.ItemWrapper>{returnPenaltyValue(item.rule)}</S.ItemWrapper>
						<S.DeleteBtn onClick={onDelete}>삭제</S.DeleteBtn>
					</S.CategoriesWrapper>
				</>
			);
		});
	return (
		<S.ModifyContainer>
			<S.ModifyWrapper>
				<S.Header>규정위반 내역 수정</S.Header>
				<S.Category>
					{modifyMessage === '규정위반 내역이 없습니다.' ? (
						<S.CategoriesWrapper>
							이 학생은 규정위반 내역이 없습니다.
						</S.CategoriesWrapper>
					) : (
						ModifyPenaltyList
					)}
				</S.Category>
			</S.ModifyWrapper>
		</S.ModifyContainer>
	);
};

export default ModifyList;
