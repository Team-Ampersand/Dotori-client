import styled from 'styled-components';

export const Container = styled.li`
	width: 95%;
	list-style: none;
	margin: 30px 40px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StuInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StuNumStyle = styled.div`
	font-size: 24px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid black;
`;

export const NameStyle = styled.div`
	font-size: 24px;
	width: 280px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid black;
`;

export const AuthorityStyle = styled.div`
	font-size: 20px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid black;
`;

export const SelfStudyStyle = styled.div`
	font-size: 20px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BanBtn = styled.button`
	width: 90px;
	height: 45px;
	margin-right: 40px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 10px;
	background-color: red;

	&:hover {
		border: 2px solid red;
		color: red;
		background-color: #fff;
	}
`;

export const BanCancelBtn = styled.button`
	width: 90px;
	height: 45px;
	margin-right: 40px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 10px;
	background-color: blue;

	&:hover {
		border: 2px solid blue;
		color: blue;
		background-color: #fff;
	}
`;

export const EditBtn = styled.button`
	width: 90px;
	height: 45px;
	margin-right: 30px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 10px;
	background-color: #0f4c81;

	&:hover {
		border: 2px solid #0f4c81;
		color: #0f4c81;
		background-color: #fff;
	}
`;

export const BtnWrapper = styled.div``;
