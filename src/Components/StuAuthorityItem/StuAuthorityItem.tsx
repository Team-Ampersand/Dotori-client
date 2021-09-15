import React, { useState } from 'react';
import * as S from './Style';

interface StuAuthorityItemProps {
	stuNum: number;
	name: string;
	authority: string;
}

const StuAuthorityItem: React.FC<StuAuthorityItemProps> = ({
	stuNum,
	name,
	authority,
}) => {
	const [editState, setEditState] = useState(false);
	const onToggle = () => setEditState(!editState);

	const onConfirm = () => {
		setEditState(!editState);
	};
	return (
		<S.Container>
			<S.StuInfoWrapper>
				<S.StuNumStyle>{stuNum}</S.StuNumStyle>
				<S.NameStyle>{name}</S.NameStyle>
				<S.AuthorityStyle>{authority}</S.AuthorityStyle>
			</S.StuInfoWrapper>
			<S.EditBtn edit={editState} onClick={onToggle}>
				수정
			</S.EditBtn>
			<S.BtnWrapper edit={editState}>
				<S.Btn BtnColor="green" onClick={onConfirm}>
					완료
				</S.Btn>
				<S.Btn BtnColor="red" onClick={() => setEditState(!editState)}>
					취소
				</S.Btn>
			</S.BtnWrapper>
		</S.Container>
	);
};

export default StuAuthorityItem;
