import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { Link, useNavigate } from 'react-router-dom';
import { studyInfo, selfStudy, cancelStudy } from 'Api/selfStudy';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';
import { useRole } from 'Hooks/useRole';

const Room = {
	currentRoom: 13,
	roomMax: 50,
};

const StudyInfo = async (setLogged, navigate, role: string) => {
	try {
		const res = await studyInfo(role);
		return res;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 401') {
		} else if (e.message === 'Request failed with status code 403') {
			alert('로그아웃 되었어요. 다시 로그인 해주세요');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			navigate('/');
			setLogged(false);
			window.location.reload();
		} else alert(e);
	}
};

const applyStudy = async (
	setInfo: {
		(
			value: React.SetStateAction<{ count: string; selfStudy_status: string }>
		): void;
		(arg0: { count: any; selfStudy_status: string }): void;
	},
	count: number,
	role: string
) => {
	try {
		await selfStudy(role);
		setInfo({ count: count + 1, selfStudy_status: 'APPLIED' });
		alert('자습 신청이 완료 되었어요');
	} catch (e) {
		alert('이미 자습신청을 하셨거나 할 수 없는 상태에요\n' + e);
	}
};

const cancleStudy = async (setInfo, count, role) => {
	try {
		await cancelStudy(role);
		setInfo({ count: count - 1, selfStudy_status: 'CANT' });
		alert('자습 신청이 취소 되었어요');
	} catch (e) {
		alert('자습취소를 하실수 없는 상태에요\n' + e);
	}
};

const returnRoomStatusNumber = (compareMax: number, compareMin: number) => {
	if (compareMax / 2 > compareMin) {
		return '#28C842';
	} else if (compareMax * (7 / 8) > compareMin) {
		return '#F8C600';
	} else {
		return '#E11A1A';
	}
};

const returnButton = (
	status: string,
	setInfo: React.Dispatch<
		React.SetStateAction<{ count: string; selfStudy_status: string }>
	>,
	count: number,
	role: string
) => {
	let today: string = ManufactureDate('W');
	let can = ['월', '화', '수', '목'];
	let cant = ['금', '토', '일'];
	let hours = new Date().getHours();
	if (localStorage.getItem('role') === 'admin') {
		return <p>사감 선생님은 자습신청을 하지 않으셔도 됩니다.</p>;
	} else if (status === 'IMPOSSIBLE') {
		return (
			<S.StudyButton
				Clicked={status}
				count={count}
				onClick={() => {
					alert('자습신청이 금지되었어요');
				}}
			>
				자습불가
			</S.StudyButton>
		);
	} else if (
		status === 'CAN' &&
		count < 50 &&
		can.indexOf(today) !== -1 &&
		hours >= 20 &&
		hours < 21
	) {
		return (
			<S.StudyButton
				onClick={() => {
					applyStudy(setInfo, count, role);
				}}
				Clicked={status}
				count={count}
			>
				자습신청
			</S.StudyButton>
		);
	} else if (status === 'APPLIED') {
		return (
			<S.StudyButton
				onClick={() => {
					if (
						window.confirm(
							'자습을 취소 하시겠어요? 오늘 하루동안 다시 신청이 불가능 해요'
						)
					) {
						cancleStudy(setInfo, count, role);
					} else alert('자습이 취소되지 않았어요');
				}}
				Clicked={status}
				count={count}
			>
				자습취소
			</S.StudyButton>
		);
	} else if (
		status === 'CANT' ||
		cant.indexOf(today) !== -1 ||
		hours < 20 ||
		hours >= 21
	) {
		return (
			<S.StudyButton
				Clicked={status}
				onClick={() => {
					alert('자습을 신청하실 수 있는 시간이 아니에요');
				}}
				count={count}
			>
				자습불가
			</S.StudyButton>
		);
	} else if (count === 50) {
		return (
			<S.StudyButton
				Clicked={status}
				onClick={() => {
					alert('50명이 넘어 신청할 수 없어요');
				}}
				count={count}
			>
				자습불가
			</S.StudyButton>
		);
	} else {
		<S.StudyButton
			Clicked={status}
			onClick={() => {
				alert('자습을 신청하실 수 있는 시간이 아니에요');
			}}
			count={count}
		>
			자습불가
		</S.StudyButton>;
	}
};

const Selfstudyboard: React.FC = () => {
	const [info, setInfo] = useState({ count: '0', selfStudy_status: '' });
	const setLogged = useSetRecoilState(HasToken);
	const navigate = useNavigate();
	const role = useRole();

	useEffect(() => {
		StudyInfo(setLogged, navigate, role).then((res) => {
			setInfo(res?.data.data);
		});
	}, []);
	return (
		<S.Positioner Clicked={info.selfStudy_status} count={parseInt(info.count)}>
			<S.StudyHeader>
				<h2>자습신청</h2>
				<div>
					<Link to="/selfstudy">
						<span>신청 현황</span>
					</Link>
				</div>
			</S.StudyHeader>
			<S.StudyContent>
				<strong>
					{ManufactureDate('Y')}년 {ManufactureDate('M')}월{' '}
					{ManufactureDate('D')}일 {ManufactureDate('W')}요일
				</strong>
				<p>20 : 00 ~ 21 : 00</p>
				<span>
					{parseInt(info.count)}/{Room.roomMax}
				</span>
				<S.PointProgress>
					<S.ActiveProgress
						statusColor={returnRoomStatusNumber(
							Room.roomMax,
							parseInt(info.count)
						)}
						count={parseInt(info.count)}
					/>
				</S.PointProgress>
				{returnButton(
					info.selfStudy_status,
					setInfo,
					parseInt(info.count),
					role
				)}
			</S.StudyContent>
		</S.Positioner>
	);
};

export default React.memo(Selfstudyboard);
