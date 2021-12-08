import styled from 'styled-components';

type StyleProps = {
	displayed?: boolean;
};

export const Positioner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
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
	font-size: 16px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: relative;
`;

export const InputStyle = styled.input<StyleProps>`
	width: 29vw;
	height: 5vh;
	border-radius: 10px;
	outline: none;
	border: 2px solid #617be3;
	padding-left: 10px;
	margin-top: 1vh;
	font-size: 16px;
	display: ${(props) => (props.displayed === true ? 'none' : 'flex')};
`;

export const EmailContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	input {
		width: 24vw;
		margin-right: 1.33vh;
	}
	button {
		width: 4.3vw;
		margin-top: 1vh;
		height: 5.5vh;
		border-radius: 9px;
		outline: none;
		border: none;
		background-color: #617be3;
		color: #fff;
		transition: 0.5s;
	}
	button:hover {
		background-color: #fff;
		color: #617be3;
		border: 2px solid #617be3;
	}
`;
