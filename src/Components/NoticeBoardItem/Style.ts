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
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	margin-top: 2.7vh;
	text-decoration: none;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	&:hover {
		box-shadow: inset 1px 1px 1em rgba(0, 0, 0, 0.1);
		background-color: #F6FCFF;
	}

	@media(max-width: 1400px){
		height: 8vh;
		padding: 0 1%;
	}
	@media(max-width: 700px){
		padding: 0 2%;
	}
`;

export const AuthorStyle = styled.div<AuthorProps>`
	span {
		color: ${(props) => props.AuthorColor};
		font-size: 1.5em;
		font-weight: bold;

		@media (max-width: 1400px){
			font-size: 1.2rem;
		}
		@media (max-width: 700px){
			font-size: 1.1rem;
		}
	}
	display: flex;
	justify-content: center;
	width: 20%;
`;

export const TitleStyle = styled.div`
	span {
		color: #000;
		font-size: 1.375em;

		@media (max-width: 1400px){
			font-size: 1.125rem;
		}
		@media (max-width: 700px){
			font-size: 0.875rem;
		}
	}
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 65%;
`;

export const DateStyle = styled.div<EditProps>`
	span {
		color: #ababab;
		font-size: 15px;
		font-weight: 600;
		line-height: 18px;

		@media (max-width: 1400px){
			font-size: 14px;
			margin-right: 10px;
		}
		@media (max-width: 700px){
			font-size: 13px;
		}
	}
	display: flex;
	justify-content: center;
	width: 20%;

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

	@media (max-width: 1400px) {
		width: 75px;
		height: 38px;
		font-size: 16px;
	}
	@media (max-width: 700px) {
		width: 70px;
		height: 36px;
		font-size: 15px;
	}
`;
