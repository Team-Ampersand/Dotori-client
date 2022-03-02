import styled from "styled-components";

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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 80px;
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
  width: 100%;
  height: 74vh;
  background-color: #fff;
  list-style: none;
  overflow-y: scroll;
  border-radius: 20px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  margin-top: 20px;
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

export const SearchWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
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

export const CheckBox = styled.input`
  margin-left: 20px;
  width: 30px;
  height: 30px;
  background-color: rgba(15, 76, 129, 1);
`;

export const SelectStu = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 650px;
  height: 70px;
  margin-top: 20px;
  margin-left: 1vh;
  border: none;
`;

export const SelectStus = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
`;