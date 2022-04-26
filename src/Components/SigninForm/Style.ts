import styled from 'styled-components';

type StyleProps = {
	displayed?: boolean;
};

export const Positioner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #ffffff;
	padding: 0 35%;
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

export const Line = styled.div`
	margin-top: 1rem;
	width: 30vw;
	border-bottom: 1px solid #969696;
`;

export const FindWrapper = styled.div`
	margin-top: 1vh;
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

export const SignupWrapper = styled.div`
	margin-top: 1rem;
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

export const ButtonStyle = styled.button`
	margin-top: 3rem;
	width: 100%;
	height: 5.5vh;
	border-radius: 5px;
	outline: none;
	border: none;
	background-color: #9ecff2;
	color: #fff;
	font-size: 18px;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);

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

export const InputStyle = styled.input<StyleProps>`
	width: 100%;
	height: 5vh;
	border-radius: 5px;
	outline: none;
	border: 2px solid #9ecff2;
	padding-left: 20px;
	margin-top: 1vh;
	font-size: 16px;
	display: ${(props) => (props.displayed === true ? 'none' : 'flex')};
	box-sizing: border-box;

	@media (max-width: 1920px) {
		padding-left: 20px;
		font-size: 16px;
		height: 5vh;
	}

	@media (max-width: 1400px) {
		padding-left: 17px;
		font-size: 14px;
		height: 4.5vh;
	}
	@media (max-width: 700px) {
		padding-left: 12px;
		font-size: 10px;
		height: 3vh;
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	label {
		opacity: 0.5;
		position: absolute;
		top: 25px;
		left: 80px;
		font-size: 16px;

		@media (max-width: 1920px) {
			font-size: 16px;
			position: absolute;
			top: 25px;
			left: 80px;
		}

		@media (max-width: 1400px) {
			font-size: 14px;
			position: absolute;
			top: 20px;
			left: 70px;
		}
		@media (max-width: 700px) {
			font-size: 10px;
			position: absolute;
			top: 13px;
			left: 50px;
		}
	}
	@media screen and (min-height: 1073px) {
		label {
			top: 27px;
		}
	}
	@media screen and (max-height: 766px) {
		label {
			top: 18px;
		}
	}
`;

export const SigninContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
