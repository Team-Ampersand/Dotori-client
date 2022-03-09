import styled from 'styled-components';

type StyleProps = {
	displayed?: boolean;
};

export const Positioner = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
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
