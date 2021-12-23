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
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Line = styled.div`
	margin-top: 2vh;
	width: 30vw;
	border-bottom: 1px solid #969696;
`;

export const CheckBox = styled.input`
	margin-right: 1vh;
	width: 20px;
	height: 20px;
`;

export const SaveContainer = styled.div`
	margin-top: 1vh;
	display: flex;
	span {
		margin-top: 0.5vh;
		color: #969696;
	}
`;

export const FindContainer = styled.div`
	margin-top: 1vh;
	span {
		color: #969696;
	}
	a {
		margin-left: 5px;
		text-decoration: none;
		color: #3a4c98;
	}
`;

export const SignupContainer = styled.div`
	margin-top: 1vh;
	span {
		color: #969696;
	}
	a {
		margin-left: 5px;
		text-decoration: none;
		color: #3a4c98;
	}
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
	position: relative;
`;

export const ArrowWrapper = styled.div`
	position: absolute;
	right: 2vh;
	top: 1.6vh;
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

export const InputWrapper = styled.div`
	position: relative;
	label {
		opacity: 0.5;
		position: absolute;
		top: 25px;
		left: 70px;
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
