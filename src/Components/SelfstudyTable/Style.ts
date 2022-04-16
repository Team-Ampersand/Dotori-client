import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 80%;
	background-color: #fff;
	border-radius: 20px;
	margin-top: 2rem;
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
	height: 100%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 3rem;
	justify-content: space-between;
	justify-items: center;
	overflow-y: scroll;
	height: 100%;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		font-size: 23px;
	}
`;
