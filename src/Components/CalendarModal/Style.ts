import styled from 'styled-components';

type StyleProps = {
	visible: boolean;
};

export const CalendarContainer = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	z-index: 1;

	background-color: #fff;
	justify-content: space-between;
	align-items: center;
	h3 {
		margin-left: 30px;
		font-size: 26px;
		font-weight: bold;
	}

	svg {
		cursor: pointer;
		margin-top: 1%;
		margin-right: 3.5%;
	}
`;

export const CalendarOverlay = styled.div<StyleProps>`
	visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

export const CalendarWrapper = styled.div`
	font-size: 16px;
	position: absolute;
	top: 1%;
	left: 93%;

	@media screen and (max-width: 1400px) {
		left: auto;
		right: -27vw;
	}
	.react-calendar {
		width: 400px;
		max-width: 100%;
		background-color: #fff;
		color: #222;
		border-radius: 7px;
		padding: 5px;
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
		font-family: Arial, Helvetica, sans-serif;
		line-height: 1.125em;

		@media screen and (max-width: 1400px) {
			width: 380px;
		}
	}
	.react-calendar__navigation button {
		color: #6d92c4;
		min-width: 44px;
		background: none;
		font-size: 16px;
		margin-top: 8px;
	}
	.react-calendar__navigation button:enabled:hover,
	.react-calendar__navigation button:enabled:focus {
	}
	.react-calendar__navigation button[disabled] {
		background-color: #6d92c4;
	}
	abbr[title] {
		text-decoration: none;
	}
	/* .react-calendar__month-view__days__day--weekend {
 color: #d10000;
} */
	.react-calendar__tile:enabled:hover,
	.react-calendar__tile:enabled:focus {
		background: #f8f8fa;
		color: #6d92c4;
		border-radius: 100px;
	}
	.react-calendar__tile--now {
		background: #ed7878;
		border-radius: 50px;
		font-weight: bold;
		color: #ffffff;
		font-size: 12px;
	}
	.react-calendar__tile--now:enabled:hover,
	.react-calendar__tile--now:enabled:focus {
		background: #ed7878;
		border-radius: 50px;
		font-weight: bold;
		color: #ffffff;
		font-size: 12px;
	}
	.react-calendar__tile--hasActive:enabled:hover,
	.react-calendar__tile--hasActive:enabled:focus {
		background: #ed7878;
	}
	.react-calendar__tile--active {
		background: #6f48eb;
		border-radius: 50px;
		font-weight: bold;
		color: white;
		font-size: 12px;
	}
	.react-calendar__tile--active:enabled:hover,
	.react-calendar__tile--active:enabled:focus {
		background: #6d92c4;
		color: white;
	}
	.react-calendar--selectRange .react-calendar__tile--hover {
		background-color: #f8f8fa;
	}
	.react-calendar__tile--range {
		background: #6d92c4;
		color: #6f48eb;
		border-radius: 50;
	}
	.react-calendar__tile--rangeStart {
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		background: #6d92c4;
		color: white;
	}
	.react-calendar__tile--rangeEnd {
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		background: #6d92c4;
		color: white;
	}
`;
