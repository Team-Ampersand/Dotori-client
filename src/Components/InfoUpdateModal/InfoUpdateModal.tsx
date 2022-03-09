import { useEffect, useState } from 'react';
import * as S from './Style';
import stuInfo from '../../Api/stuInfo';

interface ModalProps {
	modalState: boolean;
	closeModal: () => void;
	stuNum: string;
	memberName: string;
	role: string;
	stuId: number;
}

const InfoUpdateModal: React.FC<ModalProps> = ({
	modalState,
	closeModal,
	stuNum,
	memberName,
	role,
	stuId,
}) => {
	const [updateStuNum, setUpdateStuNum] = useState(stuNum);
	const [updateName, setUpdateName] = useState(memberName);
	const [updateRole, setUpdateRole] = useState(role);

	useEffect(() => {
		window.history.pushState({ page: 'modal' }, document.title);
		window.addEventListener('popstate', closeModal);
	});

	const returnRoleValue = (role) => {
		if (role === '자치위원') return 'ROLE_COUNCILLOR';
		if (role === '개발자') return 'ROLE_DEVELOPER';
		return 'ROLE_MEMBER';
	};

	const stuNumUpdate = async () => {
		const role = await localStorage.getItem('role');
		await stuInfo.updateStuNum(role, stuId, updateStuNum);
		alert('학번이 변경되었어요');
	};
	const stuNameUpdate = async () => {
		const role = await localStorage.getItem('role');
		await stuInfo.updateStuName(role, stuId, updateName);
		alert('이름이 변경되었어요');
	};
	const stuRoleUpdate = async () => {
		const role = await localStorage.getItem('role');
		await stuInfo.updateStuRole(role, stuId, returnRoleValue(updateRole));
		alert('권한이 변경되었어요');
	};

	const onCancle = () => {
		setUpdateStuNum(stuNum);
		setUpdateName(memberName);
		setUpdateRole(role);
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
								value={updateStuNum}
								onChange={(e) => setUpdateStuNum(e.target.value)}
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
