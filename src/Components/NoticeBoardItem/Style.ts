import styled from "styled-components";

interface StyleProps {
  AuthorColor: string;
}

export const Container = styled.div`
  width: 1640px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 40px;
  position: relative;
`;

export const AuthorStyle = styled.div<StyleProps>`
  span {
    color: ${(props) => props.AuthorColor};
    font-size: 25px;
    font-weight: bold;
  }
  position: absolute;
  padding-top: 24px;
  left: 25px;
`;

export const TitleStyle = styled.div`
  span {
    color: #000;
    font-weight: bold;
    font-size: 22px;
  }
  position: absolute;
  padding-top: 27px;
  left: 200px;
`;

export const DateStyle = styled.div`
  span {
    color: #ababab;
    font-size: 18px;
    font-weight: bold;
  }
  position: absolute;
  padding-top: 30px;
  right: 40px;
`;
