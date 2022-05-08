import styled from 'styled-components';

type StyleProps = {
	Clicked: number;
};

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 4% 6%;
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	h2 {
		font-size: 20px;
		@media (max-width: 1920px) {
			font-size: 22px;
		}
		@media (max-width: 1400px) {
			font-size: 18px;
		}
		@media (max-width: 700px) {
			font-size: 12px;
		}
	}
	strong {
		font-size: 18px;
	}
`;

export const DayWrapper = styled.div`
	width: 70%;
	display: flex;
	justify-content: flex-end;
	gap: 10px;

	span {
		cursor: pointer;
		font-size: 18px;

		@media (max-width: 1920px) {
			font-size: 17px;
		}

		@media (max-width: 1400px) {
			font-size: 13px;
		}
		@media (max-width: 700px) {
			font-size: 5px;
		}
	}
`;

export const MealContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	svg {
		cursor: pointer;
	}
`;

export const BreakfastWrapper = styled.span<StyleProps>`
	color: ${(props) => {
		return props.Clicked === 0 ? '#363636' : '#ababab';
	}};
`;
export const LaunchWrapper = styled.span<StyleProps>`
	color: ${(props) => {
		return props.Clicked === 1 ? '#363636' : '#ababab';
	}};
`;
export const DinnerWrapper = styled.span<StyleProps>`
	color: ${(props) => {
		return props.Clicked === 2 ? '#363636' : '#ababab';
	}};
`;

export const Meal = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	border-radius: 25px;

	p {
		font-size: 20px;
		@media (max-width: 1920px) {
			font-size: 20px;
		}

		@media (max-width: 1400px) {
			font-size: 13px;
		}
		@media (max-width: 700px) {
			font-size: 10px;
		}
	}
	span {
		font-size: 40px;
		font-weight: bold;

		@media (max-width: 1920px) {
			font-size: 40px;
		}

		@media (max-width: 1400px) {
			font-size: 30px;
		}
		@media (max-width: 700px) {
			font-size: 20px;
		}
	}
`;

export const NextWrapper = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const Button = styled.button`
	width: 120px;
	height: 45px;
	font-size: 16px;
	background: #0f4c80;
	color: #ffffff;
	border-radius: 9px;
	border: 0;
	&:hover {
		background: #ffffff;
		border: 1px solid #0f4c80;
		color: #0f4c80;
	}
`;
export const DateWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 18px;
	margin-top: 3.25rem;
	color: #5b5b5b;

	@media (max-width: 1920px) {
		font-size: 17px;
	}

	@media (max-width: 1400px) {
		font-size: 13px;
	}
	@media (max-width: 700px) {
		font-size: 10px;
	}
`;

export const ReverseArrow = styled.div`
	transform: rotate(180deg);
`;
