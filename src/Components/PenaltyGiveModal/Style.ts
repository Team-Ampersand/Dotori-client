import styled from 'styled-components';

export const Positioner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.8);
`;

export const Container = styled.div`
	position: relative;
	border-radius: 20px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	background-color: white;
	width: 600px;
	height: 750px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PenaltyGiveContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const DateWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
`;

export const Date = styled.input`
  width: 50%;
  height: 40px;
`;

export const BtnWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const GiveBtn = styled.button`
	width: 40vh;
	height: 50px;
	border-radius: 10px;
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

export const PenaltySelect = styled.select`
	width: 40vh;
	height: 40px;
	text-align: center;
	font-size: 17px;
	border-radius: 5px;
	padding: 0 10px;
	text-align: left;
`;

export const SelectWrapper = styled.div`
	display: flex;
`;

export const SelectBox = styled.ul`
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 15px 0 0 15px;
  list-style: none;
  overflow-y: scroll;
  font-size: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  & .selected {
    font-weight: bold;
  }
  & .currentSelect {
    background: #f1f1f1;
  }
  li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 1rem;
    cursor: pointer;
  }
  li:hover {
    background: #f1f1f1;
  }
`;

export const SelectBox2 = styled(SelectBox)`
  border-radius: 0 15px 15px 0;
`;

export const DefaultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const TagContainer = styled.div`
  display: grid;
	justify-content: center;
	grid-template-columns: 0.5fr 0.5fr;
	column-gap: 30px;
  height: 10rem;
  padding: 2% 1%;
  overflow-y: scroll;
    svg {
      margin-left: 1rem;
      cursor: pointer;
  }
`;

export const TagWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	width: 200%;
	height: 100%;
	cursor: pointer;
	:hover{
		background: #f7f7f7;
	}
`;

export const ExceptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 10rem;
	font-size: 15px;
`;