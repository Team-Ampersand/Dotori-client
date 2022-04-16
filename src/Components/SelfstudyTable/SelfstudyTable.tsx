import React from 'react';
import * as S from './Style';
import List from './List/List';
import { useRecoilValue } from 'recoil';
import { list } from 'Atoms';
import { TextLogo } from 'Assets/Svg';

const SelfstudyTable: React.FC = () => {
	const userlist = useRecoilValue(list);
	return (
		<S.Postioner>
			{userlist ? (
				<S.Content>
					<List />
				</S.Content>
			) : (
				<S.ExceptionWrapper>
					<TextLogo />
					<span>자습을 신청한 사람이 없어요</span>
				</S.ExceptionWrapper>
			)}
		</S.Postioner>
	);
};

export default SelfstudyTable;
