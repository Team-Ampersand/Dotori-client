import React, { useEffect } from 'react';
import * as S from './Style';
import { studyRank } from 'Api/selfStudy';
import { useRecoilState } from 'recoil';
import { list } from 'Atoms';
import Logo from 'Assets/Svg/Logo';
import { useRole } from 'Hooks/useRole';

const ReturnUserObj = async (role: string) => {
	const data = await studyRank(role);
	return data;
};

const returnBorderColor = (stuNum) => {
	if (stuNum.substring(0, 1) === '1') {
		return '#FFF65E';
	} else if (stuNum.substring(0, 1) === '2') {
		return '#5E98CA';
	} else if (stuNum.substring(0, 1) === '3') {
		return '#60D286';
	} else {
		return '#000000';
	}
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
			{userlist ? (
				userlist &&
				userlist.map((item, idx) => (
					<S.Wrapper
						key={`${idx}`}
						borderColor={returnBorderColor(item.stuNum)}
					>
						<div>{item.memberName}</div>
						<div>{item.stuNum}</div>
					</S.Wrapper>
				))
			) : (
				<S.ExceptionWrapper>
					<Logo />
					<span>자습을 신청한 사람이 없어요</span>
				</S.ExceptionWrapper>
			)}
		</>
	);
};

export default List;
