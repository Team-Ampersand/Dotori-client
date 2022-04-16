import styled from 'styled-components';
import { Link } from 'react-router-dom';

type StyleProps = {
	PageN: number;
	CurrentCounter: number;
};

type UnderBars = {
	CurrentCounter?: number;
	left?: number;
	n?: number;
};

type SlideButton = {
	display?: string;
	top?: number;
	left?: number;
	right?: number;
	rotateD?: number;
};

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	background-color: #c7e2f6;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	background-color: white;
	width: 100%;
	height: 6%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	svg {
		width: 8%;
		margin-left: 2%;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 20vw;
	height: 100%;
	margin-right: 3vw;
	gap: 10px;
`;

export const SignBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 7vw;
	height: 70%;
	background-color: #9ecff2;
	border-radius: 5px;
	border: none;
	outline: none;
	font-size: 1rem;
	font-weight: bold;
	color: white;
	&:hover {
		background-color: #4775af;
		transition: all ease 0.2s 0s;
	}
	@media (max-width: 1900px) {
		width: 13vw;
		font-size: 1.2rem;
	}
	@media (max-width: 1600px) {
		width: 11vw;
		font-size: 0.9rem;
	}
	@media (max-width: 1400px) {
		width: 10vw;
		font-size: 0.8rem;
	}
	@media (max-width: 700px) {
		width: 10vw;
		font-size: 0.7rem;
	}
`;

export const Dotory = styled.h2`
	color: white;
	font-size: 4.5vw;
	position: relative;
	right: 2vw;

	@media (max-width: 1900px) {
		font-size: 4.5vw;
		position: relative;
		right: 2vw;
	}
	@media (max-width: 1600px) {
		position: relative;
		font-size: 4.5vw;
		right: -0.7vw;
	}
	@media (max-width: 1400px) {
		position: relative;
		font-size: 4vw;
		right: 0vw;
	}
	@media (max-width: 700px) {
		font-size: 4.5vw;
		position: relative;
		right: -7.5vw;
		top: 16vh;
	}
`;

export const Dormitory = styled.h2`
	-webkit-text-stroke: 3px white;
	color: #c7e2f6;
	font-size: 4.3vw;
	position: relative;
	bottom: 22vh;
	left: 3vh;

	@media (max-width: 1900px) {
		-webkit-text-stroke: 3px white;
	}
	@media (max-width: 1600px) {
		-webkit-text-stroke: 2.5px white;
	}
	@media (max-width: 1400px) {
		-webkit-text-stroke: 2.5px white;
		position: relative;
		bottom: 22vh;
		left: 0vh;
	}
	@media (max-width: 700px) {
		-webkit-text-stroke: 1px white;
		position: relative;
		bottom: -8vh;
		left: -9.5vh;
	}
`;

export const ProductBodyScrollable = styled.div`
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	height: 94%;
`;

export const Products = styled.div`
	display: flex;
	width: ${(props: StyleProps) => props.PageN * 100}vw;
	transform: translateX(
		${(props: StyleProps) => `-${props.CurrentCounter * 100}vw`}
	);
	transition: all ease-in-out 0.3s 0s;
	height: 100%;

	svg {
		position: relative;
		top: 20vh;
		left: 7vw;
		width: 55vh;
		z-index: 10;
		transform: scale(2.3);
	}

	@media (max-width: 1900px) {
		svg {
			position: relative;
			transform: scale(2.3);
		}
	}
	@media (max-width: 1600px) {
		svg {
			position: relative;
			transform: scale(2.2);
		}
	}
	@media (max-width: 1400px) {
		svg {
			position: relative;
			transform: scale(2.2);
		}
	}
	/* ... */
	@media (max-width: 700px) {
		svg {
			position: relative;
			top: 30vh;
			left: 7vw;
			transform: scale(1.4);
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

export const SlideBtn = styled.div`
	position: fixed;
	display: ${(props: SlideButton) => props.display};
	top: ${(props: SlideButton) => props.top}px;
	left: ${(props: SlideButton) => props.left}px;
	right: ${(props: SlideButton) => props.right}px;

	transform: rotate(${(props: SlideButton) => props.rotateD}deg);
	border: none;
	background-color: transparent;
	transition: all ease 0.3s 0s;
	svg {
		width: 100px;
		height: 100px;
	}

	&:hover {
		cursor: pointer;
	}
	@media (max-width: 1900px) {
		svg {
			width: 75px;
			height: 75px;
		}
	}
	@media (max-width: 1600px) {
		svg {
			width: 60px;
			height: 60px;
		}
	}
	@media (max-width: 1400px) {
		svg {
			width: 60px;
			height: 60px;
		}
	}
	@media (max-width: 700px) {
		svg {
			width: 30px;
			height: 30px;
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
	font-size: 2.5rem;
	color: white;
	font-weight: bold;

	@media (max-width: 1900px) {
		font-size: 2rem;
	}
	@media (max-width: 1600px) {
		font-size: 1.7rem;
	}
	@media (max-width: 1400px) {
		font-size: 1.7rem;
	}
	@media (max-width: 700px) {
		font-size: 1.3rem;
	}
`;

export const DotoryDesc = styled.div`
	line-height: 170%;
	gap: 50px;
	width: 100%;
	height: 50%;
	font-size: 1.4rem;
	color: white;
	white-space: normal;

	@media (max-width: 1900px) {
		font-size: 1.3rem;
	}
	@media (max-width: 1600px) {
		font-size: 1.1rem;
	}
	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media (max-width: 700px) {
		font-size: 0.7rem;
	}
`;

export const UnderBar = styled.span<UnderBars>`
	z-index: 10;
	position: fixed;
	top: 93%;
	left: ${(props) => props.left}%;
	background-color: ${(props) =>
		props.CurrentCounter === props.n ? 'white' : '#e9e9e9'};
	display: flex;
	height: 0.5vw;
	width: 5%;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
