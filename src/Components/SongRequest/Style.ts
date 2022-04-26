import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 50%;
	background-color: #ffffff;
	border-radius: 20px;
`;

export const TextContainer = styled.div`
	padding: 5%;
	height: 60%;
	label {
		font-weight: bold;
		font-size: 26px;
		color: #6d92c4;
	}

	p {
		line-height: 20px;
		margin-top: 2%;
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	height: 40%;
	padding: 7.5% 0 5% 5%;
	box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 0px 0px 20px 20px;

	p {
		font-weight: bold;
		font-size: 16px;
		margin-bottom: 2%;
	}

	input {
		width: 81%;
		height: 32%;
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
