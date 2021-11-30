import React, { useEffect } from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import { LaptopHeader } from '../Header/model/CombineAdminHeader';
import selfstudy from '../../../Api/selfstudy';
import { useRecoilState } from 'recoil';
import { list } from 'Atoms';
import { useHistory } from 'react-router';

const ReturnUserObj = async () => {
	try {
		const res = await selfstudy.lookupstudy();
		return res;
	} catch (e: any) {
		alert(e);
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
	const history = useHistory();

	useEffect(() => {
		ReturnUserObj()
			.then((res) => {
				setUserList(res?.data.data);
			})
			.catch((e) => {
				if (e.response.status === 401) {
					history.push('/signin');
					alert(
						'장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요.'
					);
					localStorage.removeItem('Dotori_accessToken');
					localStorage.removeItem('Dotori_refreshToken');
					window.location.reload();
				}
			});
	}, [setUserList]);

	return (
		<>
			{userlist?.map((item, ix) => (
				<S.Wrapper key={`${ix}`}>
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
