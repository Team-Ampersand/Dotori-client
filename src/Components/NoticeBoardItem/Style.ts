import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

interface EditProps {
	edit: boolean;
}

interface AuthorProps {
	AuthorColor: string;
}

interface BtnProps {
	BtnColor: string;
}

export const Container = styled(Link)`
	width: 95%;
	height: 8.7vh;
	background-color: #fff;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	margin-top: 2.7vh;
	text-decoration: none;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
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
	display: flex;
	justify-content: center;
	/* border: 1px solid red; */
	width: 20%;
`;

export const TitleStyle = styled.div`
	span {
		color: #000;
		font-size: 1.375em;
	}
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	/* border: 1px solid blue; */
	width: 65%;
`;

export const DateStyle = styled.div<EditProps>`
	span {
		color: #ababab;
		font-size: 15px;
		font-weight: 600;
		line-height: 18px;
	}
	display: flex;
	justify-content: center;
	/* border: 1px solid black; */
	width: 15%;

	${(props) =>
		props.edit &&
		css`
			display: none;
		`}
`;

export const BtnWrapper = styled.div<EditProps>`
	${(props) =>
		!props.edit &&
		css`
			display: none;
		`}
`;

export const Btn = styled.button`
	width: 80px;
	height: 40px;
	border-radius: 5px;
	background-color: #f38d8d;
	border: none;
	outline: none;
	font-size: 17px;
	font-weight: 600;
	color: #fff;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
	&:hover {
		background-color: #fff;
		color: #f38d8d;
		border: 2px solid #f38d8d;
	}
`;
