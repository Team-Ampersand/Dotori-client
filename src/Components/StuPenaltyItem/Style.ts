import styled from 'styled-components';

interface BtnProps {
	BtnColor: string;
}

export const Container = styled.li`
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
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
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NameStyle = styled.div`
	font-size: 24px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
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

export const CheckBtn = styled.button`
	width: 120px;
	height: 40px;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 5px;
	background-color: #B3B3B3;

	&:hover {
		border: 2px solid #B3B3B3;
		color: #B3B3B3;
		background-color: #fff;
	}
`;

export const EditModifyBtn = styled.button`
	width: 80px;
	height: 40px;
	margin-right: 20px;
	border: 2px solid #9ECFF2;
	background-color: #9ECFF2;
	font-size: 18px;
	font-weight: bold;
	color: white;
	border-radius: 5px;

	&:hover {
		background-color: transparent;
		color: #9ECFF2;
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