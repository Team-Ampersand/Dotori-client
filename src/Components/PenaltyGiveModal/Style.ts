import styled from 'styled-components';

export const Positioner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 5;
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
	background-color: rgba(255, 255, 255, 0.8);
`;

export const Container = styled.div`
	position: relative;
	border-radius: 20px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	background-color: white;
	width: 550px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PenaltyGiveContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const DateWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
`;

export const Date = styled.input``;

export const List = styled.div`
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: flex-start;
`;

export const BtnWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const GiveBtn = styled.button`
	width: 40vh;
	height: 50px;
	border-radius: 30px;
	border: none;
	background-color: #ff5252;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	&:hover {
		background-color: #fff;
		color: #ff5252;
		border: 2px solid #ff5252;
	}
`;

export const PenaltySelect = styled.select`
	width: 40vh;
	height: 40px;
	text-align: center;
	font-size: 17px;
	border-radius: 5px;
	padding: 0 10px;
	text-align: left;
`;
