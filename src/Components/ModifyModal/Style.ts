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
	border-radius: 40px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	background-color: white;
	width: 650px;
	height: 800px;
	display: flex;
	justify-content: center;
	@media (max-width: 1400px) {
		width: 550px;
		height: 700px;
	}
	@media (max-width: 700px) {
		width: 450px;
		height: 600px;
	}
`;

export const BtnWrapper = styled.div`
	position: absolute;
	bottom: 0;
	margin-bottom: 45px;
	width: 230px;
	display: flex;
	justify-content: center;
`;

export const CompleteBtn = styled.button`
	width: 100px;
	height: 40px;
	border-radius: 5px;
	border: 2px solid black;
	background-color: transparent;
	color: black;
	font-size: 18px;
	font-weight: bold;
	&:hover {
		background-color: black;
		color: white;
	}
	@media (max-width: 1400px) {
		width: 85px;
		height: 35px;
		font-size: 16px;
	}
	@media (max-width: 700px) {
		width: 70px;
		height: 30px;
		font-size: 12px;
	}
`;

export const DeleteBtn = styled.button`
	width: 80px;
	height: 40px;
	border-radius: 10px;
	border: none;
	background-color: #ff5252;
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	&:hover {
		background-color: #fff;
		color: #ff5252;
		border: 2px solid #ff5252;
	}
	@media (max-width: 1400px) {
		font-size: 14px;
	}
	@media (max-width: 700px) {
		font-size: 12px;
	}
`;
