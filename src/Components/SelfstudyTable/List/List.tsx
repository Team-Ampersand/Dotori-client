import React, { useEffect } from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import { LaptopHeader } from '../Header/model/CombineAdminHeader';
import selfstudy from 'Api/selfStudy';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { list, HasToken } from 'Atoms';
import { useHistory } from 'react-router';
import { deleteCookie } from 'Utils/Cookie';

const ReturnUserObj = async (history, setLogged) => {
	try {
		const res = await selfstudy.lookupstudy();
		return res;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 401') {
			history.push('/signin');
			alert('장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요.');

			// deleteCookie('Dotori_accessToken');
			// deleteCookie('Dotori_refreshToken');
			// deleteCookie('role');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

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

const List: React.FC<ListProps> = ({ match }) => {
	const [userlist, setUserList] = useRecoilState(list);
	const setLogged = useSetRecoilState(HasToken);
	const history = useHistory();

	useEffect(() => {
		ReturnUserObj(history, setLogged).then((res) => {
			setUserList(res?.data.data);
		});
	}, [setUserList]);

	return (
		<>
			{userlist &&
				userlist.map((item, idx) => (
					<S.Wrapper key={`${idx}`}>
						<div style={{ flex: onlyCompareThisHeader(match)!.list[0].flex }}>
							{item.username}
						</div>
						<div style={{ flex: onlyCompareThisHeader(match)!.list[1].flex }}>
							{item.stdNum}
						</div>
					</S.Wrapper>
				))}
		</>
	);
};

export default List;
