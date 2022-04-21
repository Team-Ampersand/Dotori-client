import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 540px;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 20px;
	label {
		margin: 4.5% 6.5%;
		font-weight: bold;
		font-size: 26px;
		color: #6d92c4;
	}
`;

export const TextContainer = styled.div`
	p {
		margin-left: 6.5%;
		margin-top: 2%;
	}

	hr {
		margin-top: 7%;
		border: 1px solid #d8d8d8;
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	margin-left: 6.5%;

	p {
		font-weight: bold;
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 1%;
		margin-top: 5%;
	}
	input {
		width: 75%;
		height: 35%;
		font-size: 15px;
		padding-left: 10px;
		border: 2px solid #9ecff2;
		box-sizing: border-box;
		border-radius: 5px;
	}
	input:focus::-webkit-input-placeholder {
		color: gray;
		font-size: 15px;
		padding: 2px;
	}
	button {
		margin-left: 2%;
		width: 91px;
		height: 36.23px;
		border: 0;
		outline: 0;
		align-items: center;
		background: #9ecff2;
		border-radius: 5px;
		font-size: 15px;
		font-weight: bold;
		color: white;
	}

	button:hover {
		color: #9ecff2;
		border: 2px solid #ffffff;
		background-color: #ffffff;
	}
`;
