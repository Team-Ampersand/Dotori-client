import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InputStyle = styled.input`
	width: 29vw;
	height: 5vh;
	border-radius: 10px;
	outline: none;
	border: 2px solid #617be3;
	padding-left: 10px;
	margin-top: 1vh;
	font-size: 16px;
`;

export const ButtonStyle = styled.button`
	margin-top: 2vh;
	width: 29.5vw;
	height: 5.5vh;
	border-radius: 10px;
	outline: none;
	border: none;
	background-color: #617be3;
	color: #fff;
	font-size: 18px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
