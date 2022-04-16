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
	opacity: 0.5;
`;

export const Container = styled.div`
	width: 531px;
	height: 657px;
	background: #ffffff;
	border-radius: 20px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 2% 3%;
`;

export const Title = styled.span`
	font-size: 20px;
	font-weight: 500;
`;

export const TitleWrapper = styled.div`
	width: 100%;
	position: relative;
	text-align: center;
	svg {
		cursor: pointer;
		position: absolute;
		right: 0;
		left: auto;
	}
`;

export const PenaltyInfoWrapper = styled.div`
	width: 100%;
	height: 70%;
	border-radius: 5px;
	display: flex;
	overflow-y: scroll;
	flex-direction: column;
	align-items: center;
`;

export const PenaltyCheckBtn = styled.button`
	width: 30%;
	height: 40px;
	border: 0;
	background: #9ecff2;
	color: #ffffff;
	font-size: 16px;
	border-radius: 10px;
`;

export const PenaltyWrapper = styled.div`
	width: 95%;
	min-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.13);
	border-radius: 5px;
	margin-top: 20px;

	&:first-of-type {
		margin-top: 10px;
	}
	&:last-of-type {
		margin-bottom: 1.5rem;
	}

	p:nth-of-type(2) {
		width: 20%;
		color: #adadad;
		justify-content: flex-end;
		margin-right: 1.5rem;
		font-size: 10px;
	}

	p {
		width: 90%;
		display: flex;
		justify-content: flex-start;
		margin-left: 1.5rem;
		font-size: 15px;
	}
`;

export const PenaltyException = styled.p`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
