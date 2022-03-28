import { massage, massageInfo, cancelMassage } from 'Api/massage';
import { useRole } from 'Hooks/useRole';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ManufactureDate } from 'Utils/ManufactureDate';
import * as S from './Style';

const returnRoomStatusNumber = (compareMax: number, compareMin: number) => {
	if (compareMax / 2 > compareMin) {
		return '#28C842';
	} else if (compareMax * (7 / 8) > compareMin) {
		return '#F8C600';
	} else {
		return '#E11A1A';
	}
};

const MassageInfo = async (role: string) => {
	const res = massageInfo(role);
	return res;
};

const applyMassage = async (setInfo, count: number, role: string) => {
	await massage(role);
	setInfo({ count: count + 1, status: 'APPLIED' });
	alert('안마의자 신청이 완료되었어요');
};

const CancelMassage = async (setInfo, count: number, role: string) => {
	await cancelMassage(role);
	setInfo({ count: count - 1, status: 'CANT' });
	alert(
		'안마의자 신청이 취소 되었어요. 오늘 하루 동안 다시 신청이 불가능 해요'
	);
};

const returnButton = (
	status: string,
	setInfo: React.Dispatch<
		React.SetStateAction<{ count: string; status: string }>
	>,
	count: number,
	role: string
) => {
	let today: string = ManufactureDate('W');
	let can = ['월', '화', '수', '목'];
	let cant = ['금', '토', '일'];
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	if (localStorage.getItem('role') === 'admin') {
		return <p>사감 선생님은 안마의자 신청을 하지 않으셔도 됩니다</p>;
	} else if (
		status === 'CAN' &&
		count < 5 &&
		can.indexOf(today) !== -1 &&
		hours >= 20 &&
		hours < 21 &&
		minutes >= 20
	) {
		return (
			<S.MassageButton
				onClick={() => {
					applyMassage(setInfo, count, role);
				}}
				status={status}
				count={count}
			>
				안마의자 신청
			</S.MassageButton>
		);
	} else if (status === 'APPLIED') {
		return (
			<S.MassageButton
				onClick={() => {
					if (window.confirm('안마의자 신청을 취소하시겠어요?')) {
						CancelMassage(setInfo, count, role);
					} else alert('안마의자 신청이 취소되지 않았어요');
				}}
				status={status}
				count={count}
			>
				안마의자 취소
			</S.MassageButton>
		);
	} else if (status === 'IMPOSSIBLE') {
		return (
			<S.MassageButton
				onClick={() =>
					alert('안마의자 신청은 신청일로 부터 한달 뒤 신청 가능해요')
				}
				status={status}
				count={count}
			>
				신청불가
			</S.MassageButton>
		);
	} else if (
		cant.indexOf(today) !== -1 ||
		hours < 20 ||
		hours >= 21 ||
		minutes < 20
	) {
		return (
			<S.MassageButton
				onClick={() => alert('안마의자 신청 가능한 시간이 아니에요')}
				status={status}
				count={count}
			>
				신청불가
			</S.MassageButton>
		);
	} else if (count === 5) {
		return (
			<S.MassageButton
				onClick={() => alert('5명이 넘어 신청할 수 없어요')}
				status={status}
				count={count}
			>
				신청불가
			</S.MassageButton>
		);
	} else if (status === 'CANT') {
		return (
			<S.MassageButton
				onClick={() => alert('안마의자 신청이 불가능 해요')}
				status={status}
				count={count}
			>
				신청불가
			</S.MassageButton>
		);
	} else {
		<S.MassageButton
			onClick={() => alert('안마의자 신청이 불가능해요')}
			status={status}
			count={count}
		>
			신청불가
		</S.MassageButton>;
	}
};

const MassageBoard: React.FC = () => {
	const [info, setInfo] = useState({ count: '0', status: '' });
	const role = useRole();

	useEffect(() => {
		MassageInfo(role).then((res) => {
			setInfo(res?.data.data);
		});
	}, []);

	return (
		<S.Positioner status={info.status} count={parseInt(info.count)}>
			<S.MassageHeader>
				<h2>안마의자 신청</h2>
				<div>
					<Link to="/massage">
						<span>신청 현황</span>
					</Link>
				</div>
			</S.MassageHeader>
			<S.MassageContent>
				<strong>
					{ManufactureDate('Y')}년 {ManufactureDate('M')}월{' '}
					{ManufactureDate('D')}일 {ManufactureDate('W')}요일
				</strong>
				<p>20 : 20 ~ 21 : 00</p>
				<span>{info.count}/5</span>
				<S.PointProgress>
					<S.ActiveProgress
						statusColor={returnRoomStatusNumber(5, parseInt(info.count))}
						count={parseInt(info.count)}
					/>
				</S.PointProgress>
				{returnButton(info.status, setInfo, parseInt(info.count), role)}
			</S.MassageContent>
		</S.Positioner>
	);
};

export default React.memo(MassageBoard);
