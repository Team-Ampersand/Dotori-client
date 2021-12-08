import styled from 'styled-components';

type StyleProps = {
	Clicked: number;
};

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const TitleContainer = styled.div`
	width: 90%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 30px;

	h2 {
		font-size: 20px;
	}
	strong {
		font-size: 18px;
	}
`;

export const DayWrapper = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		cursor: pointer;
		font-size: 18px;
	}
`;

export const MealContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const BreakfastWrapper = styled.span<StyleProps>`
	color: ${(props) => {
		return props.Clicked === 0 ? '#333' : '#8b8b8b';
	}};
`;
export const LaunchWrapper = styled.span<StyleProps>`
	color: ${(props) => {
		return props.Clicked === 1 ? '#333' : '#8b8b8b';
	}};
`;
export const DinnerWrapper = styled.span<StyleProps>`
	color: ${(props) => {
		return props.Clicked === 2 ? '#333' : '#8b8b8b';
	}};
`;

export const Meal = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	border-radius: 25px;

	p {
		font-size: 20px;
	}
	span {
		margin-bottom: 1vh;
		font-size: 40px;
		display: flex;
		justify-content: center;
		font-weight: bold;
	}
`;
