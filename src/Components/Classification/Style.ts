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
	@media (max-width: 1400px) {
		width: 400px;
		height: 60px;
	}
	@media (max-width: 700px) {
		width: 200px;
		height: 45px;
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
	@media (max-width: 1400px) {
		font-size: 16px;
		width: 70px;
		height: 35px;
	}
	@media (max-width: 700px) {
		font-size: 8px;
		width: 45px;
		height: 25px;
		border: 1px solid #9ecff2;
	} ;
`;

export const Option = styled.option``;

export const Label = styled.div`
	margin: 0 20px 0 20px;
	font-size: 20px;
	font-weight: bold;
	@media (max-width: 1920px) {
		font-size: 20px;
		margin: 0 25px 0 15px;
	}
	@media (max-width: 1400px) {
		font-size: 18px;
		margin: 0 20px 0 10px;
	}
	@media (max-width: 700px) {
		font-size: 10px;
		margin: 0 5px 0 3px;
	} ;
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
	@media (max-width: 1400px) {
		font-size: 16px;
		width: 70px;
		height: 35px;
	}
	@media (max-width: 700px) {
		font-size: 8px;
		width: 45px;
		height: 25px;
	} ;
`;
