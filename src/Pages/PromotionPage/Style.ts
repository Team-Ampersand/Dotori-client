import styled from 'styled-components';
import { Link } from 'react-router-dom';

type StyleProps = {
	top?: string;
	left?: string;
	right?: string;
	display?: string;
};

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	background-color: #c7e2f6;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		color: #fff;
		font-size: 60px;
		text-decoration-line: none;
	}
	p {
		color: #fff;
		font-size: 20px;
		font-weight: lighter;
		margin-top: 10px;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const Header = styled.div`
	background-color: white;
	position: absolute;
	top: 0;
	width: 100%;
	height: 6%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	svg {
		margin-left: 30px;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 190px;
	height: 35px;
	margin-right: 30px;
	gap: 10px;
`;

export const SignBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 70px;
	height: 30px;
	background-color: #9ecff2;
	border-radius: 5px;
	border: none;
	outline: none;
	font-size: 10px;
	font-weight: bold;
	color: white;
	&:hover {
		width: 103px;
		transition: 0.15s;
	}
`;

export const Btn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	width: 160px;
	height: 60px;
	background-color: #fff;
	border-radius: 10px;
	border: none;
	outline: none;
	text-decoration: none;
	font-size: 26px;
	font-weight: bold;
	color: #0f4c81;
	&:hover {
		width: 170px;
		transition: 0.15s;
	}
`;

export const Footer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 8%;
	background-color: #1971c2;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 30px;
		margin-right: 20px;
		font-weight: lighter;
	}
`;

export const Dotory = styled.h2`
	font-size: 65px;
	color: white;
	position: relative;
	left: 35px;
	-webkit-text-stroke: 1px white;
`;

export const Dormitory = styled.h2`
	-webkit-text-stroke: 3px white;
	color: #c7e2f6;
	font-size: 70px;
	position: relative;
	bottom: 180px;
`;

export const ProductBodyScrollable = styled.div`
	/* position: relative; */
	white-space: nowrap;
	overflow: hidden;
	margin-top: 6%;
	width: 100%;
	height: 100vh;
`;

export const Products = styled.div`
	display: flex;
	transition: all ease-in-out 0.3s 0s;
	width: 300vw;
	height: 100%;

	svg {
		position: relative;
		top: 100px;
		left: 100px;
		width: 450px;
		z-index: 10;
		transform: scale(2);
	}
`;

export const Product = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SlideBtn = styled.button<StyleProps>`
	position: fixed;
	display: ${(props) => props.display};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	color: white;
	border: none;
	font-size: 30px;
	background-color: transparent;
	transition: all ease 0.3s 0s;

	svg {
		z-index: 10;
		color: black;
		background-color: white;
		width: 50px;
	}

	&:hover {
		font-size: 35px;
	}
`;

export const Dotory2Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 55%;
	height: 100%;
	gap: 35px;
`;

export const DescTitle = styled.div`
	font-size: 30px;
	color: white;
	font-weight: bold;
`;

export const DotoryDesc = styled.div`
	line-height: 170%;
	gap: 50px;
	width: 100%;
	height: 50%;
	font-size: 1rem;
	color: white;
	white-space: normal;
`;

export const UnderBar = styled.span<StyleProps>`
	position: fixed;
	top: 93%;
	left: ${(props) => props.left};
	background-color: white;
	display: flex;
	height: 5px;
	width: 50px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
