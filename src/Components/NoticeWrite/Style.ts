import styled from 'styled-components';

export const Positioner = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const Container = styled.div`
	width: 84vw;
	height: 83vh;
	background: #fff;
	border-radius: 20px;
	margin-top: 1.8vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const TitleInput = styled.input`
	width: 58.5vw;
	height: 6.3vh;
	margin-top: 3.6vh;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	border: none;
	text-align: center;
	font-size: 1.6rem;
	font-weight: bold;
	&:focus::-webkit-input-placeholder {
		color: transparent;
	}
`;

export const ContentInput = styled.textarea`
	width: 56.5vw;
	height: 52vh;
	margin-top: 3.6vh;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border: none;
	border-radius: 20px;
	padding: 2vh 1vw 2vh 1vw;
	font-size: 1.3rem;
	font-weight: 500;
	resize: none;
`;

export const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 2.2vh;
`;

export const Btn = styled.button`
	width: 7.8vw;
	height: 4.5vh;
	margin: 1.8vh 1vw 1.8vh 1vw;
	background-color: #0f4c81;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	border: 2px solid #0f4c81;
	border-radius: 10px;
	font-size: 1.25rem;
	font-weight: bold;
	color: #fff;
	&:hover {
		background-color: #fff;
		color: #0f4c81;
		border: 2px solid #0f4c81;
	}
`;

export const DeleteBtn = styled.button`
	width: 7.8vw;
	height: 4.5vh;
	margin: 1.8vh 1vw 1.8vh 1vw;
	background-color: #f03e3e;
	border: none;
	border: 2px solid #f03e3e;
	border-radius: 10px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	font-size: 1.25rem;
	font-weight: bold;
	color: #fff;
	&:hover {
		background-color: #fff;
		color: #f03e3e;
		border: 2px solid #f03e3e;
	}
`;
