import React, { useState } from 'react';
import { PageTemplate } from '..';
import { LaptopRoom, LaptopSeats } from '../../Components';
import { MatchType } from '../../Utils/GlobalType';
import * as S from './Style';

const roomDummyData = [
	{
		roomName: '자기주도학습',
		maxSeat: 40,
		minSeat: 15,
	},
	{
		roomName: 'LAB 1',
		maxSeat: 24,
		minSeat: 9,
	},
	{
		roomName: 'LAB 2',
		maxSeat: 24,
		minSeat: 3,
	},
	{
		roomName: 'LAB 3',
		maxSeat: 24,
		minSeat: 18,
	},
	{
		roomName: 'LAB 4',
		maxSeat: 24,
		minSeat: 13,
	},
];

interface LaptopProps {
	match: MatchType;
}

const LaptopContainer: React.FC<LaptopProps> = ({ match }) => {
	const [roomName, setRoomName] = useState('');

	return (
		<PageTemplate match={match}>
			<LaptopRoom
				roomData={roomDummyData}
				onPressRoom={(value) => setRoomName(value)}
			/>
			{(roomName && <LaptopSeats roomId={roomName} />) || (
				<S.Postioner>노트북 대여실을 선택해주세요.</S.Postioner>
			)}
		</PageTemplate>
	);
};

export default LaptopContainer;
