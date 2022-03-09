import styled from 'styled-components';

interface StyleProps {
	circleColor: string;
}

export const Postioner = styled.div`
	width: 100%;
	border-radius: 15px;
	box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.16);
	background-color: #ffffff;
	height: 50px;
	margin-top: 15px;
	display: flex;
	cursor: pointer;
`;

export const ActiveDivision = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ActiveCircle = styled.div<StyleProps>`
	width: 10px;
	height: 10px;
	background-color: ${(props) => props.circleColor};
	border-radius: 50%;
`;

export const TitleDivision = styled.div`
	flex: 6;
	display: flex;
	align-items: center;

	span {
		font-size: 16px;
		font-weight: bold;
		line-height: 24px;
	}
`;

export const DateDivision = styled.div`
	flex: 4;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		color: #bbbbbe;
		font-size: 14px;
	}
`;
