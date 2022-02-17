import styled from "styled-components";

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
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 650px;
  height: 450px;
  display: flex;
  justify-content: center;
`;

export const PenaltyGiveContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const DateWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 60px;
`;

export const Date = styled.input`

`;

export const List = styled.div`
    width: 100%;
    height: 40vh;
    margin-top: 10vh;
    display: grid;
    justify-content: center;
    align-items: flex-start;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GiveBtn = styled.button`
  width: 80%;
  height: 50px;
  border-radius: 20px;
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

export const PenaltySelect = styled.select`
  width: 30vh;
  height: 35px;
  text-align: center;
  font-size: 24px;
`;