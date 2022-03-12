import styled from 'styled-components';

type StyleProps = {
	visible: boolean;
};

export const CalendarContainer = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	border-radius: 20px;
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
	top: 1px;
	left: 720px;
`;
