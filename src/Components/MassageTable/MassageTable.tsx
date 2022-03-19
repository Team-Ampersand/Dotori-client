import massage from 'Api/massage';
import Logo from 'Assets/Svg/Logo';
import { HasToken } from 'Atoms';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './Style';

type ListType = {
	id: number;
	stuNum: string;
	memberName: string;
};

const returnBorderColor = (stuNum: string) => {
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

const MassageTable = () => {
	const [list, setList] = useState<ListType[]>();
	const navigate = useNavigate();
	const setLogged = useSetRecoilState(HasToken);

	const returnUserObj = async () => {
		try {
			const res = await massage.massageLookup();
			return res;
		} catch (e: any) {
			if (e.message === 'Request failed with status code 401') {
				alert('로그아웃 되었어요. 다시 로그인 해주세요');

				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				localStorage.removeItem('role');

				navigate('/signin');
				setLogged(false);
				window.location.reload();
			}
		}
	};

	useEffect(() => {
		returnUserObj().then((res) => {
			setList(res?.data.data);
		});
	}, []);

	return (
		<S.Positioner>
			<S.Content>
				{list ? (
					list &&
					list.map((item, index) => (
						<S.Wrapper borderColor={returnBorderColor(item.stuNum)} key={index}>
							<div>{item.memberName}</div>
							<div>{item.stuNum}</div>
						</S.Wrapper>
					))
				) : (
					<S.ExceptionWrapper>
						<Logo />
						<span>안마의자를 신청한 사람이 없어요</span>
					</S.ExceptionWrapper>
				)}
			</S.Content>
		</S.Positioner>
	);
};

export default MassageTable;
