import styled from "styled-components";

export const Positioner = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 9vh;
`;

export const BoxContainer = styled.div`
  display: flex;
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

export const AuthorizationBoard = styled.ul`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  list-style: none;
  overflow-y: scroll;
  border-radius: 20px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  background-color: #FFFFFF;
  border-radius: 20px;
`;

export const SearchBox = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 300px;
  height: 70px;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-left: 1vh;
  border: none;
  ::placeholder{
      font-size: 18px;
  }
`;

export const Search = styled.input`
  display: flex;
  width: 50%;
  height: 90%;
  border: none;
  border-radius: 20px;
  ::placeholder{
      font-size: 18px;
  }
`;

export const BreakDownBtn = styled.button`
  width: 190px;
  height: 70px;
  margin-top: 20px;
  border-radius: 20px;
  margin-left: 1vh;
  border: none;
  background-color: #FF5252;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: #fff;
    color: #FF5252;
    border: 2px solid #FF5252;
  }
`;