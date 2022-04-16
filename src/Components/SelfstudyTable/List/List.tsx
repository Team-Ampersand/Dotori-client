import React, { useEffect } from 'react';
import * as S from './Style';
import { studyRank } from 'Api/selfStudy';
import { useRecoilState } from 'recoil';
import { list } from 'Atoms';
import Logo from 'Assets/Svg/Logo';
import { useRole } from 'Hooks/useRole';
import { TextLogo, SmallFemale, SmallMale, Profile } from 'Assets/Svg';

const ReturnUserObj = async (role: string) => {
	const data = await studyRank(role);
	return data;
};

const List: React.FC = () => {
	const [userlist, setUserList] = useRecoilState(list);
	const role = useRole();

	useEffect(() => {
		ReturnUserObj(role).then((res) => {
			setUserList(res?.data.data);
		});
	}, []);

	return (
		<>
			{userlist &&
				userlist.map((item, idx) => (
					<S.Wrapper key={`${idx}`}>
						{item.gender === 'PENDING' ? (
							<Profile width={110} height={110} />
						) : item.gender === 'MAN' ? (
							<SmallMale />
						) : (
							<SmallFemale />
						)}
						<S.StuNum>{item.stuNum}</S.StuNum>
						<S.Name>{item.memberName}</S.Name>
					</S.Wrapper>
				))}
		</>
	);
};

export default List;
