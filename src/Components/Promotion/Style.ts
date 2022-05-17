import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stringLength } from '@firebase/util';

type StyleProps = {
	CurrentCounter: number;
};
type UnderBars = {
	CurrentCounter?: number;
	left?: string;
	n?: number;
};
type btn = {
	display?: string;
	top?: string;
	left?: string;
	right?: string;
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
		margin-left: 0.5vw;
		width: 8vw;
		height: 2.5vw;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 7vw;
	height: 100%;
	margin-right: 0.5vw;
	gap: 10px;
`;

export const SignBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 4vw;
	height: 60%;
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
		width: 4.5vw;
		font-size: 0.9rem;
	}
	@media (max-width: 1600px) {
		width: 4vw;
		font-size: 0.4rem;
	}
	@media (max-width: 1400px) {
		width: 4vw;
		font-size: 0.5rem;
	}
	@media (max-width: 700px) {
		width: 6vw;
		font-size: 0.3rem;
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
	width: 200vw;
	transform: translateX(
		${(props: StyleProps) => `-${props.CurrentCounter * 100}vw`}
	);
	transition: all ease-in-out 0.3s 0s;
	height: 100%;
`;

export const Product = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const PromotionImg = styled.img`
	width: 65vw;
	position: fixed;
	bottom: 0;
`;

export const SlideBtn = styled.div`
	position: fixed;
	top: 50vh;
	display: ${(props: btn) => props.display};
	left: ${(props: btn) => props.left};
	right: ${(props: btn) => props.right};
	background-color: transparent;
	transition: all ease 0.3s 0s;

	&:hover {
		cursor: pointer;
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

export const UnderBar = styled.span`
	z-index: 10;
	position: fixed;
	top: 93%;
	left: ${(props: UnderBars) => props.left};
	background-color: ${(props: UnderBars) =>
		props.CurrentCounter === props.n ? 'white' : '#e9e9e9'};
	display: flex;
	height: 0.35vw;
	width: 3%;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
