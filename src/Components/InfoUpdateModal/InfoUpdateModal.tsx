import { useEffect, useState } from 'react';
import * as S from './Style';
import {
	updateStuName,
	updateStuNum,
	updateStuRole,
	updateStuGender,
} from '../../Api/stuInfo';
import { useRole } from 'Hooks/useRole';
import { toast } from 'react-toastify';

interface ModalProps {
	modalState: boolean;
	closeModal: () => void;
	stuNum: string;
	memberName: string;
	stuId: number;
	gender: string;
}

const InfoUpdateModal: React.FC<ModalProps> = ({
	modalState,
	closeModal,
	stuNum,
	memberName,
	stuId,
	gender,
}) => {
	const role = useRole();
	const [updateStuId, setUpdateStuId] = useState(stuNum);
	const [updateName, setUpdateName] = useState(memberName);
	const [updateRole, setUpdateRole] = useState(role);
	const [updateGender, setUpdateGender] = useState(gender);

	useEffect(() => {
		window.history.pushState({ page: 'modal' }, document.title);
		window.addEventListener('popstate', closeModal);
	});

	const returnRoleValue = (role) => {
		if (role === '자치위원') return 'ROLE_COUNCILLOR';
		if (role === '개발자') return 'ROLE_DEVELOPER';
		return 'ROLE_MEMBER';
	};

	const returnGenderValue = (gender) => {
		if (gender === '남자') return 'MAN';
		if (gender === '여자') return 'WOMAN';
		return 'PENDING';
	};

	const stuNumUpdate = async () => {
		await updateStuNum(role, stuId, updateStuId);
		toast.success('학번이 변경되었어요');
	};
	const stuNameUpdate = async () => {
		await updateStuName(role, stuId, updateName);
		toast.success('이름이 변경되었어요');
	};
	const stuRoleUpdate = async () => {
		await updateStuRole(role, stuId, returnRoleValue(updateRole));
		toast.success('권한이 변경되었어요');
	};
	const stuGenderUpdate = async () => {
		await updateStuGender(role, stuId, returnGenderValue(updateGender));
		toast.success('성별이 변경되었어요');
	};

	const onCancle = () => {
		setUpdateStuId(stuNum);
		setUpdateName(memberName);
		setUpdateRole(role);
		setUpdateGender(gender);
		closeModal();
	};
	const onComplete = async () => {
		closeModal();
		window.location.reload();
	};

	return modalState ? (
		<>
			<S.Positioner>
				<S.Overlay onClick={closeModal} />
				<S.Container>
					<S.ChangerContainer>
						<S.ChangerItem>
							<S.StuNumInput
								type="number"
								value={updateStuId}
								onChange={(e) => setUpdateStuId(e.target.value)}
							/>
							<S.UpdateBtn onClick={stuNumUpdate}>학번 수정</S.UpdateBtn>
						</S.ChangerItem>
						<S.ChangerItem>
							<S.StuNameInput
								type="text"
								value={updateName}
								onChange={(e) => setUpdateName(e.target.value)}
							/>
							<S.UpdateBtn onClick={stuNameUpdate}>이름 수정</S.UpdateBtn>
						</S.ChangerItem>
						<S.ChangerItem>
							<S.StuRoleSelect
								onChange={(e) => {
									setUpdateRole(e.target.value);
								}}
							>
								<option value="" selected disabled hidden>
									선택
								</option>
								<option value="학생">학생</option>
								<option value="자치위원">자치위원</option>
								<option value="개발자">개발자</option>
							</S.StuRoleSelect>
							<S.UpdateBtn onClick={stuRoleUpdate}>권한 수정</S.UpdateBtn>
						</S.ChangerItem>
						<S.ChangerItem>
							<S.StuRoleSelect
								onChange={(e) => {
									setUpdateGender(e.target.value);
								}}
							>
								<option value="" selected disabled hidden>
									선택
								</option>
								<option value="남자">남자</option>
								<option value="여자">여자</option>
							</S.StuRoleSelect>
							<S.UpdateBtn onClick={stuGenderUpdate}>성별 수정</S.UpdateBtn>
						</S.ChangerItem>
					</S.ChangerContainer>
					<S.BtnWrapper>
						<S.CancelBtn onClick={onCancle}>취소</S.CancelBtn>
						<S.CompleteBtn onClick={onComplete}>완료</S.CompleteBtn>
					</S.BtnWrapper>
				</S.Container>
			</S.Positioner>
		</>
	) : (
		<></>
	);
};

export default InfoUpdateModal;
