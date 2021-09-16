import React, { useState } from 'react';
import * as S from './Style';
import ChangeInput from '../ChangeInput/ChangeInput';
import ChangeSelect from '../ChangeSelect/ChangeSelect';

interface StuAuthorityItemProps {
	stuNum: string;
	name: string;
	authority: string;
}

const StuAuthorityItem: React.FC<StuAuthorityItemProps> = ({
	stuNum,
	name,
	authority,
}) => {
	const [editState, setEditState] = useState(false);

	const onConfirm = () => {
		setEditState(!editState);
	};
	return (
		<S.Container>
			<S.StuInfoWrapper>
				<S.StuNumStyle>
					<ChangeInput init={stuNum} edit={editState} type="number" />
				</S.StuNumStyle>
				<S.NameStyle>
					<ChangeInput init={name} edit={editState} type="text" />
				</S.NameStyle>
				<S.AuthorityStyle>
					<ChangeSelect init={authority} edit={editState} />
				</S.AuthorityStyle>
			</S.StuInfoWrapper>
			<S.EditBtn edit={editState} onClick={() => setEditState(!editState)}>
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
