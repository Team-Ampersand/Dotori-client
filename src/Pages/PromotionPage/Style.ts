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

	@media (max-width: 1900px) {
		svg {
			width: 100px;
			margin-left: 50px;
		}
	}
	@media (max-width: 1600px) {
		svg {
			width: 90px;
			margin-left: 30px;
		}
	}
	@media (max-width: 1400px) {
		svg {
			width: 80px;
			margin-left: 30px;
		}
	}
	@media (max-width: 700px) {
		svg {
			width: 60px;
			margin-left: 15px;
		}
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

	@media (max-width: 1900px) {
		width: 150px;
		svg {
			margin-left: 50px;
		}
	}
	@media (max-width: 1600px) {
		width: 130px;
		svg {
			margin-left: 30px;
		}
	}
	@media (max-width: 1400px) {
		width: 130px;
		svg {
			margin-left: 30px;
		}
	}
	@media (max-width: 700px) {
		width: 100px;
		svg {
			margin-left: 15px;
		}
	}
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
		width: 90px;
		transition: all ease 0.2s 0s;
	}

	@media (max-width: 1900px) {
		width: 100px;
		height: 35px;
		font-size: 15px;
	}
	@media (max-width: 1600px) {
		width: 70px;
		height: 31px;
		font-size: 10px;
	}
	@media (max-width: 1400px) {
		width: 70px;
		height: 31px;
		font-size: 10px;
	}
	@media (max-width: 700px) {
		width: 55px;
		height: 25px;
		font-size: 6px;
	}
`;

export const Dotory = styled.h2`
	font-size: 65px;
	color: white;
	position: relative;
	left: 35px;
	-webkit-text-stroke: 1px white;

	@media (max-width: 1900px) {
		position: relative;
		left: -80px;
		font-size: 85px;
	}
	@media (max-width: 1600px) {
		position: relative;
		left: 35px;
		font-size: 65px;
	}
	@media (max-width: 1400px) {
		position: relative;
		left: 35px;
		font-size: 65px;
	}
	@media (max-width: 700px) {
		position: relative;
		left: 72px;
		top: 65px;
		font-size: 40px;
	}
`;

export const Dormitory = styled.h2`
	-webkit-text-stroke: 3px white;
	color: #c7e2f6;
	font-size: 70px;
	position: relative;
	bottom: 180px;

	@media (max-width: 1900px) {
		position: relative;
		bottom: 230px;
		left: 65px;
		font-size: 80px;
	}
	@media (max-width: 1600px) {
		-webkit-text-stroke: 3px white;
		position: relative;
		bottom: 180px;
		left: 0px;
		font-size: 70px;
	}
	@media (max-width: 1400px) {
		-webkit-text-stroke: 3px white;
		position: relative;
		bottom: 180px;
		left: 0px;
		font-size: 60px;
	}
	@media (max-width: 700px) {
		-webkit-text-stroke: 1px white;
		position: relative;
		bottom: 0px;
		left: -22px;
		font-size: 40px;
	}
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

	@media (max-width: 1900px) {
		svg {
			position: relative;
			top: 170px;
			left: 110px;
			transform: scale(2.8);
		}
	}
	@media (max-width: 1600px) {
		svg {
			position: relative;
			top: 120px;
			left: 105px;
			transform: scale(2);
		}
	}
	@media (max-width: 1400px) {
		svg {
			position: relative;
			top: 120px;
			left: 105px;
			transform: scale(2);
		}
	}
	@media (max-width: 700px) {
		svg {
			position: relative;
			top: 170px;
			left: 80px;
			transform: scale(1.5);
		}
	}
`;

export const Product = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SlideBtn = styled.div<StyleProps>`
	position: fixed;
	display: ${(props) => props.display};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	border: none;
	background-color: transparent;
	transition: all ease 0.3s 0s;

	svg {
		width: 150px;
	}

	&:hover {
		cursor: pointer;
	}
	@media (max-width: 1900px) {
		svg {
			width: 75px;
		}
	}
	@media (max-width: 1600px) {
		svg {
			width: 60px;
		}
	}
	@media (max-width: 1400px) {
		svg {
			width: 60px;
		}
	}
	@media (max-width: 700px) {
		svg {
			width: 30px;
		}
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

	@media (max-width: 1900px) {
		font-size: 50px;
	}
	@media (max-width: 1600px) {
		font-size: 40px;
	}
	@media (max-width: 1400px) {
		font-size: 30px;
	}
	@media (max-width: 700px) {
		font-size: 20px;
	}
`;

export const DotoryDesc = styled.div`
	line-height: 170%;
	gap: 50px;
	width: 100%;
	height: 50%;
	font-size: 1rem;
	color: white;
	white-space: normal;

	@media (max-width: 1900px) {
		font-size: 1.3rem;
	}
	@media (max-width: 1600px) {
		font-size: 1.2rem;
	}
	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media (max-width: 700px) {
		font-size: 0.7rem;
	}
`;

export const UnderBar = styled.span<StyleProps>`
	position: fixed;
	top: 93%;
	left: ${(props) => props.left};
	background-color: white;
	display: flex;
	height: 10px;
	width: 80px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

	@media (max-width: 1900px) {
		height: 7px;
		width: 70px;
	}
	@media (max-width: 1600px) {
		height: 6px;
		width: 60px;
	}
	@media (max-width: 1400px) {
		height: 5px;
		width: 50px;
	}
	@media (max-width: 700px) {
		height: 4px;
		width: 26px;
	}
`;
