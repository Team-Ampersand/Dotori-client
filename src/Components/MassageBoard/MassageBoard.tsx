import massage from 'Api/massage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ManufactureDate } from 'Utils/ManufactureDate';
import * as S from './Style';

const massageInfo = async () => {
	const res = await massage.massageInfo();
	return res;
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

const applyMassage = async (setInfo, count: number) => {
	await massage.massage();
	setInfo({ count: count + 1, status: 'APPLIED' });
	alert('안마의자 신청이 완료되었습니다.');
};

const cancelMassage = async (setInfo, count: number) => {
	await massage.cancelMassage();
	setInfo({ count: count - 1, status: 'CANT' });
	alert(
		'안마의자 신청이 취소 되었습니다. 오늘 하루 동안 다시 신청이 불가능 합니다.'
	);
};

const returnButton = (
	status: string,
	setInfo: React.Dispatch<
		React.SetStateAction<{ count: string; status: string }>
	>,
	count: number
) => {
	let today: string = ManufactureDate('W');
	let can = ['월', '화', '수', '목'];
	let cant = ['금', '토', '일'];
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	if (localStorage.getItem('role') === 'admin') {
		return <p>사감 선생님은 안마의자 신청을 하지 않으셔도 됩니다.</p>;
	} else if (
		status === 'CAN' &&
		can.indexOf(today) !== -1 &&
		hours >= 20 &&
		hours < 21 &&
		minutes >= 20
	) {
		return (
			<S.MassageButton
				onClick={() => {
					applyMassage(setInfo, count);
				}}
				status={status}
			>
				안마의자 신청
			</S.MassageButton>
		);
	} else if (status === 'APPLIED') {
		return (
			<S.MassageButton
				onClick={() => {
					if (window.confirm('안마의자 신청을 취소하시겠습니까?')) {
						cancelMassage(setInfo, count);
					} else alert('안마의자 신청이 취소되지 않았습니다.');
				}}
				status={status}
			>
				안마의자 취소
			</S.MassageButton>
		);
	} else if (status === 'IMPOSSIBLE') {
		return (
			<S.MassageButton
				onClick={() =>
					alert('안마의자 신청은 신청일로 부터 한달 뒤 신청 가능합니다.')
				}
				status={status}
			>
				신청불가
			</S.MassageButton>
		);
	} else if (
		status === 'CANT' ||
		count === 5 ||
		cant.indexOf(today) !== -1 ||
		hours < 20 ||
		hours >= 21 ||
		minutes < 20
	) {
		return (
			<S.MassageButton
				onClick={() => alert('안마의자 신청 가능한 시간이 아닙니다.')}
				status={status}
			>
				신청불가
			</S.MassageButton>
		);
	} else {
		<S.MassageButton
			onClick={() => alert('안마의자 신청이 불가능합니다.')}
			status={status}
		>
			신청불가
		</S.MassageButton>;
	}
};

const MassageBoard: React.FC = () => {
	const [info, setInfo] = useState({ count: '0', status: '' });

	useEffect(() => {
		massageInfo().then((res) => {
			setInfo(res?.data.data);
		});
	}, []);

	return (
		<S.Positioner status={info.status}>
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
				<p>8 : 20 ~ 9 : 00</p>
				<span>{info.count}/5</span>
				<S.PointProgress>
					<S.ActiveProgress
						statusColor={returnRoomStatusNumber(5, parseInt(info.count))}
						count={parseInt(info.count)}
					/>
				</S.PointProgress>
				{returnButton(info.status, setInfo, parseInt(info.count))}
			</S.MassageContent>
		</S.Positioner>
	);
};

export default React.memo(MassageBoard);
