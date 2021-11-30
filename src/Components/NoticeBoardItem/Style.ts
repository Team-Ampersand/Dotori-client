import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface EditProps {
	edit: boolean;
}

interface AuthorProps {
	AuthorColor: string;
}

interface BtnProps {
	BtnColor: string;
}

export const Container = styled.div`
	width: 98%;
	height: 7.3vh;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	margin-top: 2.7vh;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	&:hover {
		background-color: ${darken(0.05, '#fff')};
	}
`;

export const AuthorStyle = styled.div<AuthorProps>`
	span {
		color: ${(props) => props.AuthorColor};
		font-size: 1.5em;
		font-weight: bold;
	}
	margin-left: 1.5vw;
	margin-top: 2.2vh;
`;

export const TitleStyle = styled.div`
	span {
		color: #000;
		font-size: 1.375em;
	}
	margin-left: 2.4vw;
	margin-top: 2.45vh;
`;

export const DateStyle = styled.div<EditProps>`
	span {
		color: #ababab;
		font-size: 1.125em;
		font-weight: bold;
	}
	margin-left: 54vw;
	margin-top: 2.7vh;
	${(props) =>
		props.edit &&
		css`
			display: none;
		`}
`;

export const BtnWrapper = styled.div<EditProps>`
	margin-left: 48.7vw;
	margin-top: 1.68vh;
	${(props) =>
		!props.edit &&
		css`
			display: none;
		`}
`;

export const Btn = styled.button<BtnProps>`
	width: 4.4vw;
	height: 3.6vh;
	margin-left: 0.7vw;
	border-radius: 10px;
	background-color: transparent;
	border: 2px solid ${(props) => props.BtnColor};
	outline: none;
	font-size: 1.25em;
	color: ${(props) => props.BtnColor};
	font-weight: bold;
	&:hover {
		background-color: ${(props) => props.BtnColor};
		color: #fff;
	}
`;
