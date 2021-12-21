import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from 'Utils/ManufactureDate';

const returnMealdata = async (mealCode: number, setList) => {
	const res = await axios.get(
		`https://open.neis.go.kr/hub/mealServiceDietInfo?key=a3afec6ce62648408595f9b95028258b&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=${ManufactureDate(
			'YMD'
		)}`
	);
	const result = !!res.data.mealServiceDietInfo[1].row[mealCode]
		? res.data.mealServiceDietInfo[1].row[mealCode].DDISH_NM.toString()
				.replace(/[*<br/>0-9a-z.()]/g, '0')
				.split('0')
				.filter((value) => {
					return value !== '';
				})
		: [];
	const mealTime = !!res.data.mealServiceDietInfo[1].row[mealCode]
		? res.data.mealServiceDietInfo[1].row[mealCode].MMEAL_SC_NM
		: '급식이 없어요';

	setList([
		{
			kind: mealTime,
			meal: result,
		},
	]);
};

type listtype = {
	kind: string;
	meal: [];
};

const MealBoard: React.FC = () => {
	const [mealCode, setMealCode] = useState(0);
	const [list, setList] = useState([]);

	useEffect(() => {
		returnMealdata(mealCode, setList);
	}, [mealCode]);

	return (
		<S.Positioner>
			<S.TitleContainer>
				<h2>급식</h2>
				<S.DayWrapper>
					<S.BreakfastWrapper
						onClick={() => {
							setMealCode(0);
						}}
						Clicked={mealCode}
					>
						아침
					</S.BreakfastWrapper>
					<S.LaunchWrapper
						onClick={() => {
							setMealCode(1);
						}}
						Clicked={mealCode}
					>
						점심
					</S.LaunchWrapper>
					<S.DinnerWrapper
						onClick={() => {
							setMealCode(2);
						}}
						Clicked={mealCode}
					>
						저녁
					</S.DinnerWrapper>
				</S.DayWrapper>
			</S.TitleContainer>
			<S.MealContainer>
				{list.map((item: listtype, idx) => {
					return (
						<S.Meal>
							<span>{item.kind}</span>
							{item.meal.map((item, idx) => {
								return <p>{item}</p>;
							})}
						</S.Meal>
					);
				})}
			</S.MealContainer>
		</S.Positioner>
	);
};

export default MealBoard;
