import styled from 'styled-components';

export const Positioner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #9c9c9c;
	opacity: 0.7;
`;

export const Container = styled.div`
	width: 35%;
	height: 80%;
	background: #ffffff;
	border-radius: 13px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const Title = styled.span`
	font-size: 25px;
	font-weight: 500;
`;

export const PenaltyInfoWrapper = styled.div`
	width: 90%;
	height: 80%;
	background: #ededed;
	border-radius: 13px;
	overflow-y: scroll;
`;

export const PenaltyCheckBtn = styled.button`
	width: 90%;
	height: 50px;
	border: 0;
	background: #28608f;
	color: #ffffff;
	font-size: 16px;
	border-radius: 13px;
`;

export const PenaltyWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	p {
		width: 50%;
		display: flex;
		justify-content: center;
	}
`;

export const PenaltyException = styled.p`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
