import { massage, massageInfo, cancelMassage } from 'Api/massage';
import { useRole } from 'Hooks/useRole';
import React, { useEffect, useState } from 'react';
import { ManufactureDate } from 'Utils/ManufactureDate';
import * as S from './Style';
import { Arrowdown } from 'Assets/Svg';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Gender } from 'Atoms';

const returnRoomStatusNumber = (compareMax: number, compareMin: number) => {
	if (compareMax / 2 > compareMin) {
		return '#B5EAB7';
	} else if (compareMax * (7 / 8) > compareMin) {
		return '#FFE3A1';
	} else {
		return '#F3A7A7';
	}
};

const MassageInfo = async (role: string) => {
	const res = massageInfo(role);
	return res;
};

const applyMassage = async (setInfo, count: number, role: string) => {
	await massage(role);
	setInfo({ count: count + 1, status: 'APPLIED' });
};

const CancelMassage = async (setInfo, count: number, role: string) => {
	await cancelMassage(role);
	setInfo({ count: count - 1, status: 'CANT' });
};

const MassageBoard: React.FC = () => {
	const [info, setInfo] = useState({ count: '0', status: '' });
	const role = useRole();
	let today: string = ManufactureDate('W');
	let can = ['월', '화', '수', '목'];
	let cant = ['금', '토', '일'];
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	const  gender = useRecoilValue(Gender);

	const returnButton = () => {
		if (role === 'admin') {
			return <p>사감 선생님은 안마의자 신청을 하지 않으셔도 됩니다</p>;
		} else if(gender === "WOMAN"){
			return <p>여학생의 경우 여자 사감선생님께 별도로 신청해주시기 바랍니다.</p>
		}else if (
			info.status === 'CAN' &&
			parseInt(info.count) < 5 &&
			can.indexOf(today) !== -1 &&
			hours === 20 &&
			minutes >= 20
		) {
			return (
				<S.MassageButton
					onClick={() => {
						applyMassage(setInfo, parseInt(info.count), role);
					}}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청
				</S.MassageButton>
			);
		} else if (info.status === 'APPLIED' && hours === 20 && minutes <= 20) {
			return (
				<S.MassageButton
					onClick={() => {
						toast.info('신청시간이 넘어 취소 하실 수 없어요');
					}}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청취소
				</S.MassageButton>
			);
		} else if (info.status === 'APPLIED') {
			return (
				<S.MassageButton
					onClick={() => {
						if (window.confirm('안마의자 신청을 취소하시겠어요?')) {
							CancelMassage(setInfo, parseInt(info.count), role);
						} else toast.info('안마의자 신청이 취소되지 않았어요');
					}}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청취소
				</S.MassageButton>
			);
		} else if (cant.indexOf(today) !== -1 || hours !== 20 || minutes < 20) {
			return (
				<S.MassageButton
					onClick={() => toast.info('안마의자 신청이 가능한 시간이 아니에요')}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청불가
				</S.MassageButton>
			);
		} else if (parseInt(info.count) === 5) {
			return (
				<S.MassageButton
					onClick={() => toast.info('5명이 넘어 신청할 수 없어요')}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청불가
				</S.MassageButton>
			);
		} else if (info.status === 'CANT') {
			return (
				<S.MassageButton
					onClick={() => toast.info('안마의자 신청이 불가능 해요')}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청불가
				</S.MassageButton>
			);
		} else {
			return (
				<S.MassageButton
					onClick={() => toast.info('안마의자 신청이 불가능해요')}
					status={info.status}
					count={parseInt(info.count)}
				>
					신청불가
				</S.MassageButton>
			);
		}
	};

	useEffect(() => {
		MassageInfo(role).then((res) => {
			setInfo(res?.data.data);
		});
	}, []);

	return (
		<S.Positioner status={info.status} count={parseInt(info.count)}>
			<S.MassageHeader>
				<h2>안마의자 신청</h2>
				<Link to="/massage">
					<span>신청 현황</span>
					<Arrowdown />
				</Link>
			</S.MassageHeader>
			<S.MassageContent>
				<span>{info.count}/5</span>
				<S.PointProgress>
					<S.ActiveProgress
						statusColor={returnRoomStatusNumber(5, parseInt(info.count))}
						count={parseInt(info.count)}
					/>
				</S.PointProgress>
				{returnButton()}
				<S.Explain>
					<p>
						{cant.indexOf(today) !== -1 ||
						hours < 20 ||
						hours >= 21 ||
						minutes < 20
							? '20:20 ~ 21:00 에 안마의자 신청이 가능해요'
							: '안마의자 신청 시간이에요'}
					</p>
				</S.Explain>
			</S.MassageContent>
		</S.Positioner>
	);
};

export default React.memo(MassageBoard);
