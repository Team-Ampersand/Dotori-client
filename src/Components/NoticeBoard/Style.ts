import styled from 'styled-components';

export const Positioner = styled.div`
	height: 100%;
	width: 100%;
`;

export const Container = styled.div`
	position: absolute;
	width: 84vw;
	height: 79vh;
	background: #fff;
	border-radius: 20px;
	margin-top: 50px;
`;

export const PageUl = styled.ul`
	display: flex;
	justify-content: space-around;
	margin-left: 37vw;
	margin-top: 2.7vh;
	width: 200px;
	height: 35px;
	float: left;
	list-style: none;
	text-align: center;
	color: gray;
`;

export const PageLi = styled.li`
	font-size: 20px;
	font-weight: bold;
	padding-top: 5px;
	width: 25px;
	&:hover {
		cursor: pointer;
		color: #000;
	}
	&:focus::after {
		color: #fff;
		background-color: #000;
	}
`;
