import styled from 'styled-components';

export const Postioner = styled.div`
	width: 49%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 20px;
	label {
		margin: 3.5% 6.5%;
		margin-right: auto;
		font-weight: bold;
		font-size: 26px;
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		font-weight: bold;
		font-size: 18px;
		line-height: 24px;
		margin-bottom: 1vh;
		margin-top: 2vh;
	}
	input {
		width: 90%;
		height: 65px;
		font-size: 20px;
		border: 2px solid #0f4c81;
		box-sizing: border-box;
		border-radius: 15px;
	}
	button {
		margin-top: 1vh;
		width: 160px;
		height: 50px;
		border: 0;
		outline: 0;
		align-items: center;
		background: #0f4c81;
		border-radius: 10px;
		font-size: 18px;
		font-weight: bold;
		color: white;
	}

	button:hover {
		color: #0f4c81;
		border: 2px solid #0f4c81;
		background-color: #fff;
	}
`;
