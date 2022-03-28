import styled from 'styled-components';

interface BtnProps {
	BtnColor: string;
}

export const Container = styled.li`
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	svg{
		width: 40px;
		height: 40px;
		margin-left: 20px;
	}
`;

export const StuInfoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StuNumStyle = styled.div`
	font-size: 24px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 15px;
`;

export const NameStyle = styled.div`
	font-size: 24px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 2px solid black;
`;

export const PenaltyStyle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const PenaltyIconWrapper = styled.div`
	display:flex;
	align-items: center;
	.tooltiptext{
		visibility: hidden;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 10px;
		position: absolute;
		margin-top: 70px;
		z-index: 1;
	}
	:hover .tooltiptext {
	visibility: visible;
	}
`;

export const EditBtn = styled.button`
	width: 80px;
	height: 40px;
	margin-right: 70px;
	font-size: 16px;
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

export const EditModifyBtn = styled.button`
	width: 80px;
	height: 40px;
	margin-right: 30px;
	border: 2px solid black;
	background-color: black;
	font-size: 18px;
	font-weight: bold;
	color: white;
	border-radius: 10px;

	&:hover {
		background-color: transparent;
		color: black;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Btn = styled.button<BtnProps>`
	border: 2px solid ${(props) => props.BtnColor};
	border-radius: 10px;
	width: 90px;
	height: 45px;
	font-size: 18px;
	font-weight: bold;
	background-color: transparent;
	margin-left: 20px;
	color: ${(props) => props.BtnColor};
	&:hover {
		background-color: ${(props) => props.BtnColor};
		color: #fff;
	}
`;

export const CheckBox = styled.input`
	margin-left: 20px;
	width: 30px;
	height: 30px;
	background-color: rgba(15, 76, 129, 1);
`;