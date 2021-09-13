import styled from "styled-components";

export const StuPointContainer = styled.li`
	list-style: none;
	margin: 30px 40px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	height: 78px;
	display: flex;
	align-items: center;
`;

export const StuNumStyle = styled.div`
	font-size: 24px;
	padding-left: 80px;
	width: 120px;
	border-right: 1px solid black;
`;

export const NameStyle = styled.div`
	font-size: 24px;
	padding-left: 80px;
	width: 140px;
	border-right: 1px solid black;
`;

export const PointStyle = styled.div`
	font-size: 24px;
	padding-left: 80px;
	text-align: end;
	width: 30px;
`;

export const PointInput = styled.input`
	outline: none;
	text-align: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	border: none;
	margin-left: 550px;
	font-size: 18px;
	height: 40px;
	width: 250px;
`;

export const PointBtn = styled.button`
	width: 150px;
	height: 50px;
	margin-left: 100px;
	background-color: #0f4c81;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	outline: none;
	border-radius: 10px;
	border: none;
	&:hover {
		background-color: #fff;
		color: #0f4c81;
		border: 2px solid #0f4c81;
	}
`;
