import styled from 'styled-components';

export const SearchBox = styled.div`
	display: flex;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 322px;
	height: 70px;
	border-radius: 20px;
	justify-content: space-around;
	align-items: center;
	margin-top: 20px;
	margin-left: 1vh;
	border: none;
	::placeholder {
		font-size: 18px;
	}
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
`;
