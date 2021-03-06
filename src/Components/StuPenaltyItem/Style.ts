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
	.Icon {
		margin-left: 20px;
	}
	@media (max-width: 1920px) {
		padding: 0 30px 0 0;
	}
	@media (max-width: 1400px) {
		padding: 0 20px 0 0;
	}
	@media (max-width: 700px) {
		padding: 0 10px 0 0;
	} ;
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
	@media (max-width: 1400px) {
		font-size: 20px;
		width: 150px;
	}
	@media (max-width: 700px) {
		font-size: 12px;
		width: 90px;
	} ;
`;

export const NameStyle = styled.div`
	font-size: 24px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1920px) {
		width: auto;
	}
	@media (max-width: 1400px) {
		font-size: 20px;
		width: auto;
	}
	@media (max-width: 700px) {
		font-size: 12px;
		width: auto;
	} ;
`;

export const PenaltyStyle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 1920px) {
		font-size: 15px;
		margin-left: 20px;
	}
	@media (max-width: 1400px) {
		font-size: 13px;
		margin-left: 10px;
	}
	@media (max-width: 700px) {
		font-size: 10px;
		margin-left: 5px;
	} ;
`;

export const PenaltyIconWrapper = styled.div`
	display: flex;
	align-items: center;
	.tooltiptext {
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
	background-color: #b3b3b3;

	&:hover {
		border: 2px solid #b3b3b3;
		color: #b3b3b3;
		background-color: #fff;
	}
	@media (max-width: 1400px) {
		width: 100px;
		height: 35px;
		font-size: 14px;
	}
	@media (max-width: 700px) {
		width: 70px;
		height: 25px;
		font-size: 10px;
	} ;
`;

export const EditModifyBtn = styled.button`
	width: 80px;
	height: 40px;
	margin-right: 20px;
	border: 2px solid #9ecff2;
	background-color: #9ecff2;
	font-size: 18px;
	font-weight: bold;
	color: white;
	border-radius: 5px;

	&:hover {
		background-color: transparent;
		color: #9ecff2;
	}
	@media (max-width: 1920px) {
		font-size: 20px;
	}
	@media (max-width: 1400px) {
		width: 70px;
		height: 35px;
		font-size: 16px;
		margin-right: 15px;
	}
	@media (max-width: 700px) {
		width: 45px;
		height: 25px;
		font-size: 10px;
		margin-right: 10px;
	} ;
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
