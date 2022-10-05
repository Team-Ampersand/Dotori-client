import React, { useEffect } from 'react';
import * as S from './Style';
import { studyRank } from 'Api/selfStudy';
import { useRecoilState } from 'recoil';
import { classLookuped, list } from 'Atoms';
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
import SelfstudyCheck from '../SelfstudyCheck/SelfstudyCheck';

const userOBJ = [
	{
		id: '1',
		gender: 'MAN',
		stuNum: '2201',
		memberName: '강경민',
		selfStudyCheck: false,
	},
	{
		id: '14',
		gender: 'MAN',
		stuNum: '2215',
		memberName: '손정민',
		selfStudyCheck: true,
	},
	{
		id: '13',
		gender: 'MAN',
		stuNum: '2308',
		memberName: '유환빈',
		selfStudyCheck: false,
	},
];

const ReturnUserObj = async (role: string) => {
	const data = await studyRank(role);
	return data;
};

const List: React.FC = () => {
	const [userlist, setUserList] = useRecoilState(list);
	const role = useRole();
	const [ClassLookuped, setClassLookuped] = useRecoilState(classLookuped);

	useEffect(() => {
		ReturnUserObj(role).then((res) => {
			setUserList(res?.data.data);
		});
		return () => {
			setClassLookuped(false);
		};
	}, []);

	return (
		<>
			{userlist &&
				userlist.map((item, idx) => (
					<S.Wrapper key={`${idx}`}>
						<S.Medal>
							{!ClassLookuped &&
								(idx === 0 ? (
									<GoldMedal />
								) : idx === 1 ? (
									<SilverMedal />
								) : idx === 2 ? (
									<BronzeMedal />
								) : (
									idx === (userlist && userlist.length - 1) && <Trash />
								))}
						</S.Medal>
						{!(role === 'member') && (
							<S.Checkbox>
								<SelfstudyCheck
									id={item.id}
									role={role}
									state={item.selfStudyCheck}
									returnUserObj={ReturnUserObj}
								/>
							</S.Checkbox>
						)}
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
