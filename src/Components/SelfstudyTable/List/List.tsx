import React, { useEffect } from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import { LaptopHeader } from '../Header/model/CombineAdminHeader';
import selfstudy from 'Api/selfStudy';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { list, HasToken } from 'Atoms';
import { useHistory } from 'react-router';
import Logo from 'Assets/Svg/Logo';

type ListType = {
	id: number;
	stuNum: string;
	memberName: string;
};

const ReturnUserObj = async (history, setLogged) => {
	try {
		const res = await selfstudy.lookupstudy();
		return res;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 401') {
			history.push('/signin');
			alert('장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요.');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			setLogged(false);
			window.location.reload();
		} else if (e.message === 'Request failed with status code 403') {
			alert('로그아웃 되었습니다. 다시 로그인 해주세요.');

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

const onlyCompareThisHeader = (match: MatchType) => {
	switch (match.path) {
		case '/selfstudy':
			return LaptopHeader;
		default:
			break;
	}
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
						<div style={{ flex: onlyCompareThisHeader(match)!.list[0].flex }}>
							{item.memberName}
						</div>
						<div style={{ flex: onlyCompareThisHeader(match)!.list[1].flex }}>
							{item.stuNum}
						</div>
					</S.Wrapper>
				))
			) : (
				<S.ExceptionWrapper>
					<Logo />
					<span>자습을 신청한 사람이 없습니다.</span>
				</S.ExceptionWrapper>
			)}
		</>
	);
};

export default List;
