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
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 25%;
  height: 450px;
  display: flex;
  justify-content: center;
`;

export const ChangerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const ChangerItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const StuNumInput = styled.input`
  width: 90px;
  height: 30px;
  text-align: center;
  font-size: 24px;
`;

export const StuNameInput = styled.input`
  width: 90px;
  height: 30px;
  text-align: center;
  font-size: 24px;
`;

export const StuRoleSelect = styled.select`
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 24px;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid gray;
  background-color: transparent;
  color: gray;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export const CompleteBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const UpdateBtn = styled.button`
  height: 35px;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid #0f4c81;
  border-radius: 5px;
  color: #0f4c81;
  &:hover {
    background-color: #0f4c81;
    color: #fff;
  }
`;
