import React, { useEffect } from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import { LaptopHeader } from '../Header/model/CombineAdminHeader';
import selfstudy from '../../../Api/selfstudy';
import { useRecoilState } from 'recoil';
import { list } from 'Atoms';

const returnUserObj = async () => {
	try {
		const res = await selfstudy.lookupstudy();
		return res;
	} catch (e) {}
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

	useEffect(() => {
		returnUserObj().then((res) => {
			setUserList(res?.data.data);
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
