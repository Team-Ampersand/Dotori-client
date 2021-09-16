import React, { useState } from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../Utils/ManufactureDate';

const returnChooseMeal = (
	breakfast: boolean,
	launch: boolean,
	dinner: boolean
) => {
	if (breakfast) {
		return (
			<S.Breakfast>
				<span>조식</span>
				<p>백미밥</p>
				<p>프렌치토스트</p>
				<p>감자맑은국</p>
				<p>해물동그랑땡&케찹</p>
				<p>배추김치</p>
				<p>콘푸로스트/초코첵스&백색우유</p>
			</S.Breakfast>
		);
	} else if (launch) {
		return (
			<S.Launch>
				<span>중식</span>
				<p>백미밥</p>
				<p>얼큰순대해장국</p>
				<p>코다리무조림</p>
				<p>청경채생채</p>
				<p>청경채생채</p>
				<p>수제블루베리요거트</p>
				<p>수제치킨/파채발사믹드레싱</p>
			</S.Launch>
		);
	} else if (dinner) {
		return (
			<S.Dinner>
				<span>석식</span>
				<p>돈민지달걀볶음밥</p>
				<p>김치라면</p>
				<p>단무지쪽파무침</p>
				<p>모듬떡볶이&김말이튀김</p>
			</S.Dinner>
		);
	}
};

const MealBoard = () => {
	const [breakfast, setBreakfast] = useState(false);
	const [launch, setLaunch] = useState(false);
	const [dinner, setDinner] = useState(true);
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
			<S.MealContainer>
				{returnChooseMeal(breakfast, launch, dinner)}
			</S.MealContainer>
		</S.Positioner>
	);
};

export default MealBoard;
