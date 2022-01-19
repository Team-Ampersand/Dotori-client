import styled from "styled-components";

export const Positioner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 84vw;
  height: 83vh;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleInput = styled.input`
  width: 58.5vw;
  height: 6.3vh;
  margin-top: 3.6vh;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const ContentInput = styled.textarea`
  width: 56.5vw;
  height: 52vh;
  margin-top: 3.6vh;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 20px;
  padding: 2vh 1vw 2vh 1vw;
  font-size: 1.3rem;
  font-weight: 500;
  resize: none;
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const ImgContainer = styled.div``;

export const Img = styled.div`
  width: 400px;
  height: 400px;
  border: 10px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 24px;
    font-weight: lighter;
  }
`;

export const ImgBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  input {
    display: none;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    color: #fff;
    background-color: #495057;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      border: 3px solid #495057;
      color: #495057;
    }
  }
  button {
    background-color: #fa5252;
    width: 90px;
    height: 40px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      border: 3px solid #fa5252;
      color: #fa5252;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.2vh;
`;

export const Btn = styled.button`
  width: 7.8vw;
  height: 4.5vh;
  margin: 1.8vh 1vw 1.8vh 1vw;
  background-color: transparent;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f4c81;
  border: 3px solid #0f4c81;
  cursor: pointer;
  &:hover {
    background-color: #0f4c81;
    color: #fff;
  }
`;

export const DeleteBtn = styled.button`
  width: 7.8vw;
  height: 4.5vh;
  margin: 1.8vh 1vw 1.8vh 1vw;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  font-size: 1.25rem;
  font-weight: bold;
  color: #f03e3e;
  border: 3px solid #f03e3e;
  cursor: pointer;
  &:hover {
    background-color: #f03e3e;
    color: #fff;
  }
`;
