import styled from "styled-components";

export const Positioner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  width: 84vw;
  height: 79vh;
  margin-top: 1.8vh;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div``;

export const PageBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 2.7vh;
  width: 11.7vw;
  text-align: center;
`;

export const PageBtn = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.45vh 0.24vw 0.45vh 0.24vw;
  color: gray;
  &:hover {
    cursor: pointer;
    color: #000;
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
