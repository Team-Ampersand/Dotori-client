import styled from 'styled-components';

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 500px;
	height: 70px;
	border-radius: 10px;
	margin-top: 20px;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1400px){
		width: 350px;
	}
	@media screen and (max-width: 700px){
		width: 300px;
		padding: 0 10px;
	}
`;

export const SelectBox = styled.select`
	font-size: 18px;
	font-weight: bold;
	border-radius: 5px;
	border: 2px solid #9ecff2;
	width: 90px;
	height: 40px;
	text-align: center;
	color: #898989;

	@media screen and (max-width: 1400px) {
		width: 66px;
		height: 30px;
		font-size: 14px;
	}
	@media screen and (max-width: 700px) {
		width: 60px;
		height: 30px;
		font-size: 14px;	
	}
`;

export const Option = styled.option``;

export const Label = styled.div`
	margin: 0 20px;
	font-size: 20px;
	font-weight: bold;

	@media screen and (max-width: 1400px){
		font-size: 14px;
		margin: 0 10px;
		width: 28px;

		&:nth-child(4) {
			margin: 0 0px 0 10px;
		}
	}
	@media screen and (max-width: 700px){
		font-size: 12px;
		margin: 0 10px;
		width: 24px;
	}
`;

export const Btn = styled.button`
	width: 90px;
	height: 40px;
	border-radius: 5px;
	border: none;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	outline: none;
	background-color: #9ecff2;
	&:hover {
		background-color: #fff;
		color: #9ecff2;
		border: 2px solid #9ecff2;
	}

	@media screen and (max-width: 1400px) {
		width: 66px;
		height: 32px;
		font-size: 14px;
	}
	@media screen and (max-width: 700px) {
		width: 60px;
		height: 28px;
		font-size: 14px;
	}
`;
