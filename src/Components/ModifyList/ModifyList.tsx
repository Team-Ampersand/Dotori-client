import { deletePenaltyInfo } from 'Api/penaltyInfo';
import { useRole } from 'Hooks/useRole';
import React from 'react';
import * as S from './Style';
import * as I from 'Assets/Svg/index';
import { returnPenaltyValuesKorean } from 'Utils/Libs/returnPenaltyValues';

interface ModifyListProps {
	modifyList: any;
	role: string | null;
	modifyMessage: any;
	stuNum: string;
}

const ModifyList: React.FC<ModifyListProps> = ({
	modifyList,
	stuNum,
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
				}
			};
			return (
				<>
					<S.CategoriesWrapper>
						<S.DateWrapper>{item.date}</S.DateWrapper>
						<S.ItemWrapper>
							{returnPenaltyValuesKorean[item.rule]}
						</S.ItemWrapper>
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
						<S.CategoryException>
							<I.TextLogo />이 학생은 규정위반 내역이 없습니다
						</S.CategoryException>
					) : (
						ModifyPenaltyList
					)}
				</S.Category>
			</S.ModifyWrapper>
		</S.ModifyContainer>
	);
};

export default ModifyList;
