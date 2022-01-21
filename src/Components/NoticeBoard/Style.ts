import styled from "styled-components";

export const Positioner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 79vh;
  margin-top: 1.8vh;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PageBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  width: 8vw;
  span {
    svg {
      transform: rotate(180deg);
    }
  }
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  label {
    text-align: center;
    font-size: 30px;
    font-weight: lighter;
    border-radius: 50px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3.6vh;
`;

export const Btn = styled.button`
  width: 4.4vw;
  height: 3.6vh;
  margin-right: 0.5vw;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #b6b6b6;
  font-weight: bold;
  &:hover {
    background-color: #b6b6b6;
    color: #fff;
  }
`;
