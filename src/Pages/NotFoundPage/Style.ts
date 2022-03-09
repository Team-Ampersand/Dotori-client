import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		margin-top: 15px;
		font-size: 28px;
		font-weight: 400;
		color: #0f4c81;
		border-bottom: 0.5px solid #0f4c81;
	}
	p {
		margin-top: 10px;
		font-size: 16px;
		font-weight: 400;
		color: #0f4c81;
		border-bottom: 0.5px solid #0f4c81;
	}
`;

export const LogoWrapper = styled.div`
	width: 20%;
	height: 100px;
	display: flex;
	svg {
		height: 100%;
		width: 100%;
	}
`;

export const Btn = styled(Link)`
	width: 10%;
	height: 50px;
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: white;
	font-size: 20px;
	background-color: #0f4c81;
	border-radius: 10px;
	border: none;
`;
