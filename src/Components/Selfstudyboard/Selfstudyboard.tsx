import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { Link, useNavigate } from 'react-router-dom';
import { studyInfo, selfStudy, cancelStudy } from 'Api/selfStudy';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';
import { useRole } from 'Hooks/useRole';
import { Arrowdown } from 'Assets/Svg';
import { toast } from 'react-toastify';

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
			toast.info('로그아웃 되었어요. 다시 로그인 해주세요');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			navigate('/');
			setLogged(false);
			window.location.reload();
		}
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
		toast.success('자습 신청이 완료 되었어요');
	} catch (e) {
		toast.info('이미 자습 신청을 하셨거나 할 수 없는 상태에요');
	}
};

const cancleStudy = async (setInfo, count, role) => {
	try {
		await cancelStudy(role);
		setInfo({ count: count - 1, selfStudy_status: 'CANT' });
		toast.success('자습 신청이 취소 되었어요');
	} catch (e) {
		toast.info('자습취소를 하실수 없는 상태에요');
	}
};

const returnRoomStatusNumber = (compareMax: number, compareMin: number) => {
	if (compareMax / 2 > compareMin) {
		return '#B5EAB7';
	} else if (compareMax * (7 / 8) > compareMin) {
		return '#FFE3A1';
	} else {
		return '#F3A7A7';
	}
};

const Selfstudyboard: React.FC = () => {
	const [info, setInfo] = useState({ count: '0', selfStudy_status: '' });
	const setLogged = useSetRecoilState(HasToken);
	const navigate = useNavigate();
	const role = useRole();
	let today: string = ManufactureDate('W');
	let can = ['월', '화', '수', '목'];
	let cant = ['금', '토', '일'];
	let hours = new Date().getHours();

	const returnButton = () => {
		if (role === 'admin') {
			return <p>사감 선생님은 자습신청을 하지 않으셔도 됩니다.</p>;
		} else if (info.selfStudy_status === 'IMPOSSIBLE') {
			return (
				<S.StudyButton
					Clicked={info.selfStudy_status}
					count={parseInt(info.count)}
					onClick={() => {
						toast.info('자습 신청이 금지되었어요');
					}}
				>
					자습불가
				</S.StudyButton>
			);
		} else if (
			info.selfStudy_status === 'CAN' &&
			parseInt(info.count) < 50 &&
			can.indexOf(today) !== -1 &&
			hours >= 20 &&
			hours < 21
		) {
			return (
				<S.StudyButton
					onClick={() => {
						applyStudy(setInfo, parseInt(info.count), role);
					}}
					Clicked={info.selfStudy_status}
					count={parseInt(info.count)}
				>
					신청
				</S.StudyButton>
			);
		} else if (info.selfStudy_status === 'APPLIED') {
			return (
				<S.StudyButton
					onClick={() => {
						if (
							window.confirm(
								'자습을 취소 하시겠어요? 오늘 하루동안 다시 신청이 불가능 해요'
							)
						) {
							cancleStudy(setInfo, parseInt(info.count), role);
						} else toast.info('자습이 취소되지 않았어요');
					}}
					Clicked={info.selfStudy_status}
					count={parseInt(info.count)}
				>
					신청취소
				</S.StudyButton>
			);
		} else if (cant.indexOf(today) !== -1 || hours < 20 || hours >= 21) {
			return (
				<S.StudyButton
					Clicked={info.selfStudy_status}
					onClick={() => {
						toast.info('자습 신청이 가능한 시간이 아니에요');
					}}
					count={parseInt(info.count)}
				>
					신청
				</S.StudyButton>
			);
		} else if (parseInt(info.count) === 50) {
			return (
				<S.StudyButton
					Clicked={info.selfStudy_status}
					onClick={() => {
						toast.info('50명이 넘어 신청할 수 없어요');
					}}
					count={parseInt(info.count)}
				>
					신청
				</S.StudyButton>
			);
		} else if (info.selfStudy_status === 'CANT') {
			return (
				<S.StudyButton
					Clicked={info.selfStudy_status}
					onClick={() => {
						toast.info('자습 신청이 불가능 해요');
					}}
					count={parseInt(info.count)}
				>
					신청
				</S.StudyButton>
			);
		} else {
			<S.StudyButton
				Clicked={info.selfStudy_status}
				onClick={() => {
					toast.info('자습을 신청하실 수 있는 시간이 아니에요');
				}}
				count={parseInt(info.count)}
			>
				신청
			</S.StudyButton>;
		}
	};

	useEffect(() => {
		StudyInfo(setLogged, navigate, role).then((res) => {
			setInfo(res?.data.data);
		});
	}, []);

	return (
		<S.Positioner Clicked={info.selfStudy_status} count={parseInt(info.count)}>
			<S.StudyHeader>
				<h2>자습 신청</h2>
				<Link to="/selfstudy">
					<span>신청 현황</span>
					<Arrowdown />
				</Link>
			</S.StudyHeader>
			<S.StudyContent>
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
				{returnButton()}
				<p>
					{cant.indexOf(today) !== -1 || hours < 20 || hours >= 21
						? '20:00 ~ 21:00에 자습 신청이 가능해요'
						: '자습 신청 시간이에요'}
				</p>
			</S.StudyContent>
		</S.Positioner>
	);
};

export default React.memo(Selfstudyboard);
