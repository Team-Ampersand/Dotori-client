import React, { useEffect } from 'react';
import * as S from './Style';
import { studyRank } from 'Api/selfStudy';
import { useRecoilState } from 'recoil';
import { list } from 'Atoms';
import { useRole } from 'Hooks/useRole';
import {
	SmallFemale,
	SmallMale,
	Profile,
	GoldMedal,
	SilverMedal,
	BronzeMedal,
	Trash,
} from 'Assets/Svg';

const userOBJ = [
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
	{
		id: 0,
		gender: 'MAN',
		stuNum: '3214',
		memberName: '임창규',
	},
];

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
						<S.Medal>
							{idx === 0 ? (
								<GoldMedal />
							) : idx === 1 ? (
								<SilverMedal />
							) : idx === 2 ? (
								<BronzeMedal />
							) : (
								idx === (userlist && userlist.length - 1) && <Trash />
							)}
						</S.Medal>
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
