import styled from "styled-components";

interface StyleProps {
  authorColor: string;
}

export const Positioner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
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
  top: 0px;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 50%;
  height: 72.7vh;
`;

export const Title = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.authorColor};
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 8%;
  overflow: auto;
  input {
    text-align: center;
    font-size: 26px;
    font-weight: lighter;
  }
`;

export const Close = styled.div`
  position: absolute;
  margin-right: 25px;
  color: white;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 96%;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  margin: 30px 20px 20px 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  textarea {
    resize: none;
    font-size: 20px;
    width: 90%;
    height: 500px;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  min-width: 400px;
  max-width: 400px;
  min-height: 400px;
  max-height: 400px;
  margin-top: 20px;
  margin-right: 20px;
  border: 1px solid gray;
  img {
    width: 100%;
    height: 100%;
  }
`;

interface BtnWrapProps {
  color: string;
}

export const BtnWrapper = styled.div<BtnWrapProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0 0 20px 20px;
  background-color: ${(prop) => prop.color};
  justify-content: center;
`;

export const Btn = styled.button<BtnWrapProps>`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 19px;
  font-weight: bold;
  color: ${(props) => props.color};
  background-color: #fff;
  &:hover {
    background-color: ${(prop) => prop.color};
    color: #fff;
    border: 2px solid #fff;
  }
`;
