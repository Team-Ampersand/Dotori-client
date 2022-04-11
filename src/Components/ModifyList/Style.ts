import styled from 'styled-components';

export const ModifyContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const ModifyWrapper = styled.div`
	width: 600px;
	height: 750px;
	border: 2px solid rgba(0, 0, 0, 1);
	border-radius: 40px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80px;
	font-size: 30px;
	font-weight: 700;
	line-height: 35px;
	text-align: center;
`;

export const Category = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 20px;
	width: 100%;
	height: 580px;
	font-size: 18px;
	font-weight: 600;
	margin-top: 20px;
	overflow-y: scroll;
`;

export const CategoryException = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const CategoriesWrapper = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
`;

export const DateWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
`;

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	font-size: 16px;
`;

export const DeleteBtn = styled.button`
	width: 80px;
	height: 40px;
	border-radius: 5px;
	border: none;
	background-color: #f38d8d;
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	&:hover {
		background-color: #fff;
		color: #f38d8d;
		border: 2px solid #f38d8d;
	}
`;
