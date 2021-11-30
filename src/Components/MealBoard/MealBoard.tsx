import React, { useEffect, useState } from 'react';
import * as S from './Style';

const BreakfastData = [
	{
		kind: '조식',
		meal: [
			'백미밥',
			'프렌치토스트',
			'감자맑은국',
			'해물동그랑땡&케찹',
			'배추김치',
			'콘푸로스트/초코첵스&백색우유',
		],
	},
];

const LaunchData = [
	{
		kind: '중식',
		meal: [
			'백미밥',
			'얼큰순대해장국',
			'코다리무조림',
			'청경채생채',
			'수제블루베리요거트',
			'수제치킨/파채발사믹드레싱',
		],
	},
];

const DinnerData = [
	{
		kind: '석식',
		meal: [
			'돈민지달걀볶음밥',
			'김치라면',
			'단무지쪽파무침',
			'모듬떡볶이&김말이튀김',
		],
	},
];

const returnMeal = (breakfast: boolean, launch: boolean, dinner: boolean) => {
	if (breakfast) {
		return BreakfastData.map((item, ix) => {
			return (
				<S.Meal>
					<span>{item.kind}</span>
					{item.meal.map((item, ix) => {
						return <p>{item}</p>;
					})}
				</S.Meal>
			);
		});
	} else if (launch) {
		return LaunchData.map((item, ix) => {
			return (
				<S.Meal>
					<span>{item.kind}</span>
					{item.meal.map((item, ix) => {
						return <p>{item}</p>;
					})}
				</S.Meal>
			);
		});
	} else if (dinner) {
		return DinnerData.map((item, ix) => {
			return (
				<S.Meal>
					<span>{item.kind}</span>
					{item.meal.map((item, ix) => {
						return <p>{item}</p>;
					})}
				</S.Meal>
			);
		});
	}
};

const MealBoard: React.FC = () => {
	const [breakfast, setBreakfast] = useState(false);
	const [launch, setLaunch] = useState(false);
	const [dinner, setDinner] = useState(true);

	useEffect(() => {
		BreakfastData.map((item, ix) => {
			console.log(item.meal.length);
		});
	}, []);

	return (
		<S.Positioner>
			<S.TitleContainer>
				<h2>급식</h2>
				<S.DayWrapper>
					<S.BreakfastWrapper
						onClick={() => {
							setBreakfast(true);
							setLaunch(false);
							setDinner(false);
						}}
						Clicked={breakfast}
					>
						아침
					</S.BreakfastWrapper>
					<S.LaunchWrapper
						onClick={() => {
							setBreakfast(false);
							setLaunch(true);
							setDinner(false);
						}}
						Clicked={launch}
					>
						점심
					</S.LaunchWrapper>
					<S.DinnerWrapper
						onClick={() => {
							setBreakfast(false);
							setLaunch(false);
							setDinner(true);
						}}
						Clicked={dinner}
					>
						저녁
					</S.DinnerWrapper>
				</S.DayWrapper>
			</S.TitleContainer>
			<S.MealContainer>{returnMeal(breakfast, launch, dinner)}</S.MealContainer>
		</S.Positioner>
	);
};

export default MealBoard;
