import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { Link } from 'react-router-dom';
import selfStudy from '../../Api/selfStudy';

const Room = {
	currentRoom: 13,
	roomMax: 50,
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

const studyApply = async () => {
	try {
		const res = await selfStudy.apply();
		return res;
	} catch (e: any) {
		throw e;
	}
};

const returnButton = (isClicked, SetisClicked) => {
	if (isClicked) {
		return (
			<S.StudyButton
				onClick={() => {
					alert('자습이 신청되었습니다.');
					SetisClicked(false);
					studyApply();
				}}
				Clicked={isClicked}
			>
				자습신청
			</S.StudyButton>
		);
	} else {
		return (
			<S.StudyButton
				onClick={() => {
					alert('자습이 취소되었습니다.');
					SetisClicked(true);
					console.log(isClicked);
				}}
				Clicked={isClicked}
			>
				자습취소
			</S.StudyButton>
		);
	}
};

const Selfstudyboard: React.FC = () => {
	const [isClicked, SetisClicked] = useState(true);
	useEffect(() => {});
	return (
		<S.Positioner Clicked={isClicked}>
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
					{Room.currentRoom}/{Room.roomMax}
				</span>
				<S.PointProgress>
					<S.ActiveProgress
						statusColor={returnRoomStatusNumber(Room.roomMax, Room.currentRoom)}
					/>
				</S.PointProgress>
				{returnButton(isClicked, SetisClicked)}
			</S.StudyContent>
		</S.Positioner>
	);
};

export default Selfstudyboard;
