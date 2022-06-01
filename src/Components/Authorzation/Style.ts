import styled from 'styled-components';

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 500px;
	height: 70px;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
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

export const Option = styled.option``;

export const Label = styled.div`
	margin: 0 20px 0 20px;
	font-size: 20px;
	font-weight: bold;
`;

export const Btn = styled.button`
	width: 90px;
	height: 40px;
	border-radius: 10px;
	border: none;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	outline: none;
	background-color: #0f4c81;
	&:hover {
		background-color: #fff;
		color: #0f4c81;
		border: 2px solid #0f4c81;
	}
`;

export const Positioner = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	div {
		display: flex;
	}
`;

export const AuthorizationBoard = styled.ul`
	margin-top: 20px;
	border-radius: 20px;
	width: 100%;
	height: 90%;
	background-color: #fff;
	list-style: none;
	overflow: scroll;
`;

export const SearchBox = styled.div`
	display: flex;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 300px;
	height: 70px;
	border-radius: 10px;
	justify-content: space-evenly;
	align-items: center;
	border: none;
	margin-left: 50px;
	margin-top: 19px;

	@media screen and (max-width: 1400px) {
		margin-left: 30px;
		width: 280px;
        height: 60px;
	}
	@media (max-width: 700px) {
        width: 180px;
        height: 45px;
    } ;
`;

export const Search = styled.input`
	display: flex;
	width: 56%;
	height: 90%;
	border: none;
	border-radius: 20px;
	font-size: 18px;

	@media screen and (max-width: 1400px) {
		font-size: 15px;
	}
	@media screen and (max-width: 700px) {
		font-size: 12px;
		width: 113px;
	}
`;

export const SearchBtn = styled.button`
	width: 90px;
	height: 40px;
	border-radius: 3px;
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
		width: 70px;
        height: 35px;
		font-size: 14px;
	}
	@media screen and (max-width: 700px) {
		width: 40px;
        height: 25px;
		font-size: 10px;
	}
`;
