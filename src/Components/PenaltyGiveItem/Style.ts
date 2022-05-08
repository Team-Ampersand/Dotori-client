import styled from 'styled-components';

export const BreakDownBtn = styled.button`
	width: 211px;
	height: 64px;
	margin-top: 20px;
	margin-left: 1vh;
	border: none;
	background-color: #f38d8d;
	color: #ffffff;
	border-radius: 10px;
	font-size: 20px;
	font-weight: 550;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	&:hover {
		background-color: #fff;
		color: #f38d8d;
		border: 2px solid #f38d8d;
	}
	@media (max-width: 1400px) {
		font-size: 16px;
		width: 170px;
		height: 56px;
	}
	@media (max-width: 700px) {
		font-size: 8px;
		width: 60px;
		height: 45px;
	} ;
`;
