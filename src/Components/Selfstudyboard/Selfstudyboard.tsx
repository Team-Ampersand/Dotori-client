import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { Link } from 'react-router-dom';
import selfstudy from '../../Api/selfstudy';
import { isClicked } from '../../Atoms';
import { useRecoilState } from 'recoil';
import { rolelookup } from 'Utils/Libs/roleLookup';

const Room = {
	currentRoom: 13,
	roomMax: 50,
};

const studycount = async () => {
	try {
		const res = await selfstudy.countstudy();
		return res;
	} catch (e) {
		alert(e);
	}
};

const studyStatus = async () => {
	const role = await rolelookup();
	if (role === 'admin') {
		const res = {
			data: {
				data: 'admin',
			},
		};
		return res;
	} else {
		try {
			const res = await selfstudy.studystatus();
			return res;
		} catch (e) {
			alert(e);
		}
	}
};

const applyStudy = async (SetisClicked) => {
	try {
		await selfstudy.selfstudy();
		SetisClicked(false);
		alert('자습 신청이 완료 되었습니다!');
	} catch (e) {
		alert('이미 자습신청을 하셨거나 할 수 없는 상태입니다.' + e);
	}
};

const cancleStudy = async (SetisClicked) => {
	try {
		await selfstudy.cancelstudy();
		SetisClicked(true);
		alert(
			'자습 신청이 취소 되었습니다. 오늘 하루동안 다시 신청이 불가능 합니다.'
		);
	} catch (e) {
		alert('자습취소를 하실수 없는 상태입니다' + e);
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

const returnButton = (isClicked: string, SetisClicked) => {
	if (isClicked === 'CAN') {
		return (
			<S.StudyButton
				onClick={() => {
					applyStudy(SetisClicked);
					console.log(isClicked);
				}}
				Clicked={isClicked}
			>
				자습신청
			</S.StudyButton>
		);
	} else if (isClicked === 'APPLIED') {
		return (
			<S.StudyButton
				onClick={() => {
					cancleStudy(SetisClicked);
				}}
				Clicked={isClicked}
			>
				자습취소
			</S.StudyButton>
		);
	} else if (isClicked === 'CANT') {
		return (
			<S.StudyButton
				Clicked={isClicked}
				onClick={() => {
					alert(
						'이미 자습신청을 하신 후 취소하여 다시 자습을 신청 할 수 없습니다.'
					);
				}}
			>
				자습불가
			</S.StudyButton>
		);
	} else if (isClicked === 'admin') {
		return <p>사감 선생님은 자습신청을 하지 않으셔도 됩니다.</p>;
	}
};

const Selfstudyboard: React.FC = () => {
	const [IsClicked, SetisClicked] = useState('');
	const [count, setCount] = useState(0);
	useEffect(() => {
		studycount().then((res) => {
			setCount(res?.data.data);
		});
		studyStatus().then((res) => {
			SetisClicked(res?.data.data);
		});
		console.log(IsClicked);
	}, []);
	return (
		<S.Positioner Clicked={IsClicked}>
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
					{count}/{Room.roomMax}
				</span>
				<S.PointProgress>
					<S.ActiveProgress
						statusColor={returnRoomStatusNumber(Room.roomMax, Room.currentRoom)}
					/>
				</S.PointProgress>
				{returnButton(IsClicked, SetisClicked)}
			</S.StudyContent>
		</S.Positioner>
	);
};

export default Selfstudyboard;
