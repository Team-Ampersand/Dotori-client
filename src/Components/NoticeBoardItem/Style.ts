import styled from "styled-components";

interface StyleProps {
  AuthorColor: string
}

export const Container = styled.div`
  width: 1360px;
  height: 77px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const AuthorStyle = styled.div<StyleProps>`
  span {
    color: ${props => props.AuthorColor};
  }
`;

export const TitleStyle = styled.div`
  span {
    color: #000;
  }
`;

export const DateStyle = styled.div`
  span {
    color: #ABABAB;
    font-size: 18px;
    font-weight: 700;
  }
`;