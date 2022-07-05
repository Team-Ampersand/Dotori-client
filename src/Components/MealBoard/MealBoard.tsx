import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from 'Utils/ManufactureDate';
import { Arrowdown, LargeArrowDown } from 'Assets/Svg';

type listtype = {
	kind: string;
	meal: [];
};
const returnMealdata = async (
	date: { datestr: string; day: number },
	mealCode,
	setList
) => {
	const { data } = await axios.get(
		`https://open.neis.go.kr/hub/mealServiceDietInfo?key=${process.env.REACT_APP_NEIS_API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=${date.datestr}`
	);

	try {
		const result = !!data.mealServiceDietInfo[1].row[mealCode]
			? data.mealServiceDietInfo[1].row[mealCode].DDISH_NM.toString()
					.replace(/([조석완별달])*(\d)*([*<br/>a-z.() ])/g, '`')
					.split('`')
					.filter((value) => {
						return value !== '';
					})
			: [];
		const mealTime = !!data.mealServiceDietInfo[1].row[mealCode]
			? data.mealServiceDietInfo[1].row[mealCode].MMEAL_SC_NM
			: '급식이 없어요';
		setList([
			{
				kind: mealTime,
				meal: result,
			},
		]);
	} catch (e: any) {
		setList([
			{
				kind: '급식이 없어요',
				meal: [],
			},
		]);
	}
};

const returnMealcode = () => {
	let hours = new Date().getHours();
	if (hours >= 19) {
		return 0;
	} else if (hours < 8 && hours >= 0) {
		return 0;
	} else if (hours >= 8 && hours < 13) {
		return 1;
	} else {
		return 2;
	}
};

const MealBoard: React.FC = () => {
	const [mealCode, setMealCode] = useState(returnMealcode());
	const [currentDate] = useState(
		new Date(
			ManufactureDate('YMD').slice(0, 4) +
				'-' +
				ManufactureDate('YMD').slice(4, 6) +
				'-' +
				ManufactureDate('YMD').slice(6)
		)
	);

	const getDateStr = (myDate: Date) => {
		let month = myDate.getMonth() + 1;
		let stringMonth = month.toString();
		let day = myDate.getDate();
		let stringDay = day.toString();
		if (month < 10) stringMonth = '0' + month;
		if (day < 10) stringDay = '0' + day;
		return myDate.getFullYear() + stringMonth + stringDay;
	};

	const returnMealDate = () => {
		let hours = new Date().getHours();
		if (hours >= 19) {
			currentDate.setDate(currentDate.getDate() + 1);
			return { datestr: getDateStr(currentDate), day: currentDate.getDay() };
		} else {
			return { datestr: getDateStr(currentDate), day: currentDate.getDay() };
		}
	};

	const [date, setDate] = useState(returnMealDate);
	const [list, setList] = useState<listtype[]>();

	let week = ['일', '월', '화', '수', '목', '금', '토'];

	const nextMeal = () => {
		if (mealCode === 0) {
			setMealCode(1);
		} else if (mealCode === 1) {
			setMealCode(2);
		} else {
			currentDate.setDate(currentDate.getDate() + 1);
			setDate({ datestr: getDateStr(currentDate), day: currentDate.getDay() });
			setMealCode(0);
		}
	};

	const prevMeal = () => {
		if (mealCode === 0) {
			currentDate.setDate(currentDate.getDate() - 1);
			setDate({ datestr: getDateStr(currentDate), day: currentDate.getDay() });
			setMealCode(2);
		} else if (mealCode === 1) {
			setMealCode(0);
		} else {
			setMealCode(1);
		}
	};

	useEffect(() => {
		returnMealdata(date, mealCode, setList);
	}, [date, mealCode]);

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
			<S.DateWrapper>
				<span>
					{date.datestr.slice(0, 4)}.{date.datestr.slice(4, 6)}.
					{date.datestr.slice(6)} ({week[date.day]})
				</span>
			</S.DateWrapper>
			<S.MealContainer>
				<S.ReverseArrow>
					<LargeArrowDown onClick={prevMeal} />
				</S.ReverseArrow>
				{list &&
					list.map((item: listtype, index) => (
						<S.Meal key={index}>
							<span>{item.kind}</span>
							{item.meal.map((item, index) => {
								return <p key={index}>{item}</p>;
							})}
						</S.Meal>
					))}
				<LargeArrowDown onClick={nextMeal} />
			</S.MealContainer>
		</S.Positioner>
	);
};

export default MealBoard;
