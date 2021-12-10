import styled from "styled-components";
import { Link } from "react-router-dom";

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #0f4c81; */
  background-color: #1864ab;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fff;
    font-size: 60px;
    text-decoration-line: none;
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: lighter;
    margin-top: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #0f4c81;
  svg {
    margin-left: 30px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
  height: 40px;
  margin-right: 30px;
`;

export const SignBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  color: #0f4c81;
  &:hover {
    width: 103px;
    transition: 0.15s;
  }
`;

export const Btn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 160px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: 26px;
  font-weight: bold;
  color: #0f4c81;
  &:hover {
    width: 170px;
    transition: 0.15s;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8%;
  background-color: #1971c2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    margin-right: 20px;
    font-weight: lighter;
  }
`;
