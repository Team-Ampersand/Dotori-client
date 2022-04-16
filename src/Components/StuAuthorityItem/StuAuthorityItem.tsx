import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { InfoUpdateModal } from 'Components';
import { banSelfStudy, banCancelSelfStudy } from 'Api/stuInfo';
import { useRole } from 'Hooks/useRole';

interface StuAuthorityItemProps {
	stuId: number;
	stuNum: string;
	memberName: string;
	authority: string;
	selfStudy: string;
	gender: string;
}

const returnRoleValue = (roleType: string) => {
	switch (roleType) {
		case 'ROLE_COUNCILLOR':
			return '자치위원회';
		case 'ROLE_DEVELOPER':
			return '개발자';
		case 'ROLE_MEMBER':
			return '학생';
		default:
			return '';
	}
};

const returnGenderColor = (genderType: string) => {
	switch (genderType) {
		case 'MAN':
			return '#668AE6';
		case 'WOMAN':
			return '#E79393';
		case 'PENDING':
			return '#000000';
		default:
			return '#000000';
	}
};

const returnSelfStudyColor = (selfStudyType: string) => {
	switch (selfStudyType) {
		case 'CAN':
			return '#000000';
		case 'APPLIED':
			return '#000000';
		case 'CANT':
			return '#000000';
		case 'IMPOSSIBLE':
			return '#DD4A4A';
		default:
			return '';
	}
};

const returnSelfStudyValue = (selfStudy: string) => {
	switch (selfStudy) {
		case 'CAN':
			return '신청 가능';
		case 'APPLIED':
			return '신청됨';
		case 'CANT':
			return '신청 취소';
		case 'IMPOSSIBLE':
			return '신청 불가능';
		default:
			return '';
	}
};

const StuAuthorityItem: React.FC<StuAuthorityItemProps> = ({
	stuId,
	stuNum,
	memberName,
	authority,
	selfStudy,
	gender,
}) => {
	const role = useRole();
	useEffect(() => {
		if (returnSelfStudyValue(selfStudy) === '신청 불가능') {
			setSelfStudyState(false);
		}
	}, []);

	const BanSelfStudy = async () => {
		if (window.confirm('자습을 금지하시겠어요?')) {
			await banSelfStudy(role, stuId);
			window.location.reload();
		} else return;
	};

	const BanCancelSelfStudy = async () => {
		if (window.confirm('자습 금지를 취소하시겠어요?')) {
			await banCancelSelfStudy(role, stuId);
			window.location.reload();
		} else return;
	};

	const [selfStudyState, setSelfStudyState] = useState<boolean>(true);

	const [editState, setEditState] = useState(false);

	const closeModal = () => {
		setEditState(false);
	};

	return (
		<>
			<S.Container>
				<S.StuInfoWrapper>
					<S.StuNumStyle genderColor={returnGenderColor(gender)}>
						{stuNum}
					</S.StuNumStyle>
					<S.NameStyle onClick={() => console.log(selfStudy)}>
						{memberName}
					</S.NameStyle>
					<S.AuthorityStyle>{returnRoleValue(authority)}</S.AuthorityStyle>
					<S.SelfStudyStyle selfStudyColor={returnSelfStudyColor(selfStudy)}>
						{returnSelfStudyValue(selfStudy)}
					</S.SelfStudyStyle>
				</S.StuInfoWrapper>
				<S.BtnWrapper>
					{selfStudyState ? (
						<S.BanBtn onClick={BanSelfStudy}>자습 금지</S.BanBtn>
					) : (
						<S.BanCancelBtn onClick={BanCancelSelfStudy}>
							금지 취소
						</S.BanCancelBtn>
					)}
					<S.EditBtn onClick={() => setEditState(!editState)}>
						정보 수정
					</S.EditBtn>
				</S.BtnWrapper>
				<InfoUpdateModal
					modalState={editState}
					closeModal={closeModal}
					stuNum={stuNum}
					memberName={memberName}
					stuId={stuId}
				/>
			</S.Container>
		</>
	);
};

export default StuAuthorityItem;
