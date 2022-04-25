import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const TableHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	background-color: blue;
	height: 10%;

	div {
		display: flex;
		flex: 1;
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 80%;
	background-color: #fff;
	border-radius: 20px;
	margin-top: 2rem;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 3rem;
	justify-content: space-between;
	justify-items: center;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	border-radius: 10px;
	padding: 2%;

	@media screen and (max-width: 1720px) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media screen and (max-width: 1480px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (max-width: 1250px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ExceptionWrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 20px;
	margin-top: 2rem;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		font-size: 23px;
	}
`;

export const SearchBox = styled.div`
	display: flex;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 300px;
	height: 70px;
	border-radius: 10px;
	justify-content: space-around;
	align-items: center;
	border: none;
	margin-left: 50px;
	margin-top: 19px;
`;

export const Search = styled.input`
	display: flex;
	width: 50%;
	height: 90%;
	border: none;
	border-radius: 20px;
	font-size: 18px;
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
`;

export const SearchContainer = styled.div`
	display: flex;
`;
