import React, { useEffect } from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import selfstudy from 'Api/selfStudy';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { list, HasToken } from 'Atoms';
import { useHistory } from 'react-router';
import Logo from 'Assets/Svg/Logo';

const ReturnUserObj = async (history, setLogged) => {
	try {
		const res = await selfstudy.lookupstudy();
		return res;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 401') {
			history.push('/signin');
			alert('로그아웃 되었어요. 다시 로그인 해주세요');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			setLogged(false);
			window.location.reload();
		} else if (e.message === 'Request failed with status code 403') {
			alert('로그아웃 되었어요. 다시 로그인 해주세요');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			history.push('/');
			setLogged(false);
			window.location.reload();
		}
	}
};

interface ListProps {
	match: MatchType;
}

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

const List: React.FC<ListProps> = ({ match }) => {
	const [userlist, setUserList] = useRecoilState(list);
	const setLogged = useSetRecoilState(HasToken);
	const history = useHistory();

	useEffect(() => {
		ReturnUserObj(history, setLogged).then((res) => {
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
