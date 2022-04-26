import styled from 'styled-components';

type StyleProps = {
	displayed?: boolean;
};

export const Positioner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	min-height: 100vh;
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;

	svg {
		width: 100%;
		@media (max-width: 1920px) {
			width: 100%;
		}

		@media (max-width: 1400px) {
			width: 80%;
			margin-bottom: -2rem;
		}
		@media (max-width: 700px) {
			width: 50%;
			margin-bottom: -5rem;
		}
	}
`;

export const GradeWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	input {
		margin-right: 1.33vw;
		margin-left: 1.33vw;
		text-align: center;
		width: 8vw;
		padding: 0;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;

export const SelectContainer = styled.div`
	margin-top: 1.5vh;
	select {
		margin-left: 2vw;
		width: 23.8vw;
		height: 4.5vh;
		border: 2px;
		border-radius: 10px;
		outline: none;
		border: 2px solid #9ecff2;
		padding-left: 0.5vw;
	}
	span {
		color: #617be3;
		font-weight: bold;
	}
`;

export const SigninContainer = styled.div`
	margin-top: 3vh;
	span {
		color: #969696;
		@media (max-width: 1920px) {
			font-size: 16px;
		}

		@media (max-width: 1400px) {
			font-size: 13px;
		}
		@media (max-width: 700px) {
			font-size: 8px;
		}
	}
	a {
		margin-left: 5px;
		text-decoration: none;
		color: #9ecff2;
		@media (max-width: 1920px) {
			font-size: 16px;
		}

		@media (max-width: 1400px) {
			font-size: 13px;
		}
		@media (max-width: 700px) {
			font-size: 8px;
		}
	}
`;

export const QuestionContainer = styled.div`
	margin-top: 1.5vh;
	display: flex;
	flex-direction: column;
	span {
		font-size: 1.1rem;
		margin: 0 auto;
		color: #9ecff2;
		font-weight: bold;
	}
`;

export const EmailContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	input {
		width: 23vw;
		margin-right: 1vw;
	}
	button {
		width: 5vw;
		margin-top: 1vh;
		height: 5.5vh;
		border-radius: 9px;
		outline: none;
		border: none;
		background-color: #9ecff2;
		color: #fff;
		transition: 0.5s;
		font-size: 16px;

		@media (max-width: 1920px) {
			font-size: 20px;
			height: 5.5vh;
		}

		@media (max-width: 1400px) {
			font-size: 16px;
			height: 5vh;
		}
		@media (max-width: 700px) {
			font-size: 6px;
			height: 3.5vh;
		}
	}
	button:hover {
		background-color: #fff;
		color: #9ecff2;
		border: 2px solid #9ecff2;
	}
`;

export const InputStyle = styled.input<StyleProps>`
	width: 29vw;
	height: 5vh;
	border-radius: 10px;
	outline: none;
	border: 2px solid #9ecff2;
	padding-left: 10px;
	margin-top: 1vh;
	font-size: 16px;
	display: ${(props) => (props.displayed ? 'none' : 'flex')};

	@media (max-width: 1920px) {
		font-size: 16px;
		height: 5vh;
	}

	@media (max-width: 1400px) {
		font-size: 14px;
		height: 4.5vh;
	}
	@media (max-width: 700px) {
		font-size: 10px;
		height: 3vh;
	}
`;

export const ButtonStyle = styled.button<StyleProps>`
	margin-top: 2vh;
	width: calc(29vw + 10px);
	height: 5.5vh;
	border-radius: 5px;
	outline: none;
	border: none;
	background-color: ${(props) => (props.displayed ? '#617be3' : '#e5e5e5')};
	color: #fff;
	font-size: 18px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: relative;

	@media (max-width: 1920px) {
		font-size: 22px;
		margin-top: 3rem;
		height: 5.5vh;
	}

	@media (max-width: 1400px) {
		font-size: 18px;
		margin-top: 2rem;
		height: 4.5vh;
	}
	@media (max-width: 700px) {
		font-size: 15px;
		margin-top: 1rem;
		height: 3vh;
	}
`;

export const ArrowWrapper = styled.div`
	position: absolute;
	right: 2vh;
	top: 1.6vh;
`;

export const CertifyButton = styled.button<StyleProps>`
	display: ${(props) => (props.displayed ? 'none' : '')};
	width: 4.3vw;
	margin-top: 1vh;
	height: 5.5vh;
	border-radius: 5px;
	outline: none;
	border: none;
	background-color: #9ecff2;
	color: #fff;
	transition: 0.5s;
`;

export const InputWrapper = styled.div`
	position: relative;
	label {
		display: none;
		opacity: 0.5;
		position: absolute;
		top: 27px;
		left: 70px;
		transition: all 0.5s ease;
	}
	input:focus + label,
	input:valid + label {
		display: flex;
	}
	@media screen and (min-height: 1073px) {
		label {
			top: 30px;
		}
	}
	@media screen and (max-height: 766px) {
		label {
			top: 18px;
		}
	}
`;
