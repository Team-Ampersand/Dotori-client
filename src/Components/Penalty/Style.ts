import styled from 'styled-components';
import { CSVLink } from "react-csv";

export const Positioner = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const BoxContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const StuBoxContainer = styled.div`
	display: flex;
	align-items: center;
	width: 95%;
	list-style: none;
	margin: 20px 40px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	height: 75px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1400px) {
		height: 60px;
		margin: 15px 30px;
	}
	@media (max-width: 700px) {
		height: 45px;
		margin: 10px 15px;
	} ;
`;

export const SelectBoxWrapper = styled.div`
	display: flex;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 500px;
	height: 70px;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const SelectBox = styled.select`
	font-size: 18px;
	font-weight: bold;
	border-radius: 10px;
	border: 1px solid #000;
	width: 80px;
	height: 40px;
	text-align: center;
`;

export const AuthorizationBoard = styled.ul`
	width: 100%;
	height: 74vh;
	background-color: #fff;
	list-style: none;
	overflow-y: scroll;
	overflow-x: hidden;
	border-radius: 20px;
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 75vh;
	margin-top: 20px;
	background-color: #ffffff;
	border-radius: 20px;
`;

export const CheckBox = styled.input`
	margin-left: 20px;
	width: 30px;
	height: 30px;
	background-color: rgba(15, 76, 129, 1);
	@media (max-width: 1400px) {
		margin-left: 15px;
		width: 25px;
		height: 25px;
	}
	@media (max-width: 700px) {
		margin-left: 10px;
		width: 15px;
		height: 15px;
	} ;
`;

export const SelectStu = styled.div`
	display: flex;
	align-items: center;
	width: auto;
	height: 64px;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	margin-top: 20px;
	margin-left: 1vh;
	border: none;
	padding-right: 20px;
	padding-left: 10px;
	border-radius: 10px;
	@media (max-width: 1920px) {
		text-align: center;
		padding: 0 20px;
		font-size: 18px;
	}
	@media (max-width: 1400px) {
		width: auto;
		height: 56px;
		text-align: center;
		padding: 0 10px;
		font-size: 16px;
	}
	@media (max-width: 700px) {
		width: 70px;
		height: 45px;
		text-align: center;
		padding: 0 5px;
		font-size: 8px;
	} ;
`;

export const SelectStus = styled.div`
	display: flex;
	justify-content: center;
	width: 100px;
	border: none;
	border-radius: 20px;
	font-size: 16px;
	font-weight: 700;
	@media (max-width: 1920px) {
		font-size: 18px;
	}
	@media (max-width: 1400px) {
		font-size: 16px;
	}
	@media (max-width: 700px) {
		font-size: 8px;
	} ;
`;


export const CsvLink = styled(CSVLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 211px;
	height: 64px;
	background-color: #20c997;
	margin-top: 20px;
	margin-left: 1vh;
	border: none;
	color: #ffffff;
	border-radius: 10px;
	font-size: 20px;
	font-weight: 550;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	text-decoration: none;
	&:hover {
		background-color: #fff;
		color: #20c997;
		border: 2px solid #20c997;
	}
`;