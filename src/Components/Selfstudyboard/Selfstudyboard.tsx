import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { Link, useHistory } from 'react-router-dom';
import selfstudy from 'Api/selfStudy';
import { getCookie } from 'Utils/Cookie';
import { useSetRecoilState } from 'recoil';
import { HasToken } from 'Atoms';

const Room = {
	currentRoom: 13,
	roomMax: 50,
};

const studyInfo = async (setLogged, history) => {
	try {
		const res = await selfstudy.studyinfo();
		return res;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 401') {
		} else if (e.message === 'Request failed with status code 403') {
			alert('로그아웃 되었습니다. 다시 로그인 해주세요.');

			// deleteCookie('Dotori_accessToken');
			// deleteCookie('Dotori_refreshToken');
			// deleteCookie('role');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			history.push('/');
			setLogged(false);
			window.location.reload();
		} else alert(e);
	}
};

const applyStudy = async (setInfo, count) => {
	try {
		await selfstudy.selfstudy();
		setInfo({ count: count + 1, selfStudy_status: 'APPLIED' });
		alert('자습 신청이 완료 되었습니다!');
	} catch (e) {
		alert('이미 자습신청을 하셨거나 할 수 없는 상태입니다.\n' + e);
	}
};

const cancleStudy = async (setInfo, count) => {
	try {
		await selfstudy.cancelstudy();
		setInfo({ count: count - 1, selfStudy_status: 'CANT' });
		alert(
			'자습 신청이 취소 되었습니다. 오늘 하루동안 다시 신청이 불가능 합니다.'
		);
	} catch (e) {
		alert('자습취소를 하실수 없는 상태입니다\n' + e);
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

const returnButton = (status: string, setInfo, count) => {
	let today: string = ManufactureDate('W');
	let can = ['월', '화', '수', '목'];
	let cant = ['금', '토', '일'];
	let hours = new Date().getHours();
	if (localStorage.getItem('role') === 'admin') {
		return <p>사감 선생님은 자습신청을 하지 않으셔도 됩니다.</p>;
	} else if (
		status === 'CAN' &&
		can.indexOf(today) !== -1 &&
		hours >= 20 &&
		hours < 22
	) {
		return (
			<S.StudyButton
				onClick={() => {
					applyStudy(setInfo, count);
				}}
				Clicked={status}
			>
				자습신청
			</S.StudyButton>
		);
	} else if (status === 'APPLIED') {
		return (
			<S.StudyButton
				onClick={() => {
					if (window.confirm('자습을 취소 하시겠습니까?')) {
						cancleStudy(setInfo, count);
					} else alert('자습이 취소되지 않았습니다.');
				}}
				Clicked={status}
			>
				자습취소
			</S.StudyButton>
		);
	} else if (
		status === 'CANT' ||
		count >= 50 ||
		cant.indexOf(today) !== -1 ||
		hours < 20 ||
		hours > 22
	) {
		return (
			<S.StudyButton
				Clicked={status}
				onClick={() => {
					alert('아직 자습을 신청하실 수 있는 시간이 아닙니다.');
				}}
			>
				자습불가
			</S.StudyButton>
		);
	}
};

const Selfstudyboard: React.FC = () => {
	const [info, setInfo] = useState({ count: '0', selfStudy_status: '' });
	const setLogged = useSetRecoilState(HasToken);
	const history = useHistory();
	useEffect(() => {
		studyInfo(setLogged, history).then((res) => {
			setInfo(res?.data.data);
		});
	}, []);
	return (
		<S.Positioner Clicked={info.selfStudy_status}>
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
				{returnButton(info.selfStudy_status, setInfo, parseInt(info.count))}
			</S.StudyContent>
		</S.Positioner>
	);
};

export default React.memo(Selfstudyboard);
