import styled from 'styled-components';

export const SearchBox = styled.div`
	display: flex;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 322px;
	height: 70px;
	border-radius: 10px;
	justify-content: space-around;
	align-items: center;
	margin-top: 20px;
	margin-left: 1vh;
	border: none;
	::placeholder {
		font-size: 18px;
	}
	@media (max-width: 1400px) {
		width: 280px;
		height: 60px;
	}
	@media (max-width: 700px) {
		width: 160px;
		height: 45px;
	} ;
`;

export const Search = styled.input`
	display: flex;
	width: 150px;
	height: 50px;
	border: none;
	border-radius: 20px;
	::placeholder {
		font-size: 18px;
	}
	@media (max-width: 1400px) {
		::placeholder {
			font-size: 16px;
		}
	}
	@media (max-width: 700px) {
		::placeholder {
			font-size: 8px;
		}
		width: 93px;
		height: 30px;
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
		width: 40px;
		height: 25px;
		font-size: 8px;
	} ;
`;
